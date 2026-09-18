import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() { return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#174735", color: "#c8a66b", fontSize: 21, fontFamily: "monospace", border: "3px solid #c8a66b" }}>PT</div>, size); }
