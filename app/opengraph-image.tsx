import { ImageResponse } from "next/og";

export const alt = "The Pool Table Store — Alexandria, Virginia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#f3f1ea", color: "#18211e", fontFamily: "Georgia" }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 23, color: "#153f32" }}><span style={{ display: "flex", fontWeight: 700 }}>THE POOL TABLE STORE</span><span style={{ display: "flex", fontFamily: "Arial", fontSize: 18 }}>ALEXANDRIA, VIRGINIA</span></div><div style={{ display: "flex", flexDirection: "column", gap: 22 }}><div style={{ display: "flex", flexDirection: "column", fontSize: 88, lineHeight: 1, letterSpacing: -3 }}>Pool tables.<span style={{ display: "flex" }}>Expertly set up.</span></div><div style={{ display: "flex", fontFamily: "Arial", color: "#153f32", fontSize: 20, fontWeight: 700 }}>SALES · MOVING · REPAIR · RESTORATION</div></div><div style={{ display: "flex", borderTop: "2px solid #153f32", paddingTop: 22, fontFamily: "Arial", fontSize: 18, color: "#5c6863" }}>SPECIALIZED POOL TABLE SERVICE SINCE 1990 · (571) 236-2119</div></div>, size);
}
