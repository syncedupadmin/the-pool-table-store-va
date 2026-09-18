import { ImageResponse } from "next/og";

export const alt = "The Pool Table Store — Alexandria, Virginia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#111915", color: "#f2efe6", fontFamily: "Georgia" }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, letterSpacing: 3, color: "#c8a66b" }}><span style={{ display: "flex" }}>THE POOL TABLE STORE</span><span style={{ display: "flex", fontFamily: "monospace", fontSize: 16 }}>ALEXANDRIA / VA</span></div><div style={{ display: "flex", flexDirection: "column", gap: 18 }}><div style={{ display: "flex", flexDirection: "column", fontSize: 84, lineHeight: 1.02, letterSpacing: -3 }}>Keep the<span style={{ display: "flex", color: "#b9d1b7" }}>table true.</span></div><div style={{ display: "flex", fontFamily: "monospace", color: "#aeb8ad", fontSize: 18 }}>SALES · MOVING · REPAIR · RESTORATION</div></div><div style={{ display: "flex", borderTop: "1px solid #3b4840", paddingTop: 22, fontFamily: "monospace", fontSize: 17, color: "#aeb8ad" }}>SPECIALIZED POOL TABLE SERVICE SINCE 1990</div></div>, size);
}
