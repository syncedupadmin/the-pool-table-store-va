import { chromium } from "@playwright/test";

const baseURL = process.env.QA_BASE_URL ?? "http://localhost:3000";
const widths = [320, 390, 430, 768, 1440];
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const errors = [];
page.on("console", (message) => { if (message.type() === "error") errors.push(`console: ${message.text()}`); });
page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
for (const width of widths) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(baseURL, { waitUntil: "networkidle" });
  const result = await page.evaluate(() => ({ overflow: document.documentElement.scrollWidth > window.innerWidth + 1, h1: Boolean(document.querySelector("h1")), nav: Boolean(document.querySelector("nav")), images: [...document.images].filter((image) => image.currentSrc && (!image.complete || image.naturalWidth === 0)).length, tel: [...document.querySelectorAll('a[href^="tel:"]')].length }));
  if (result.overflow) errors.push(`${width}px horizontal overflow`);
  if (!result.h1 || !result.nav || result.images || !result.tel) errors.push(`${width}px structure ${JSON.stringify(result)}`);
}
for (const path of ["/robots.txt", "/sitemap.xml", "/opengraph-image", "/icon"]) { const response = await page.request.get(`${baseURL}${path}`); if (!response.ok()) errors.push(`${path} returned ${response.status()}`); }
await page.goto(baseURL, { waitUntil: "networkidle" });
const metadata = await page.evaluate(() => ({ title: document.title, description: document.querySelector('meta[name="description"]')?.getAttribute("content"), robots: document.querySelector('meta[name="robots"]')?.getAttribute("content"), og: document.querySelector('meta[property="og:image"]')?.getAttribute("content") }));
if (!metadata.title || !metadata.description || !metadata.robots?.includes("noindex") || !metadata.og) errors.push(`metadata ${JSON.stringify(metadata)}`);
await browser.close();
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`QA passed at ${baseURL}: ${widths.join(", ")}px, assets, actions, metadata, robots, OG, icon`);
