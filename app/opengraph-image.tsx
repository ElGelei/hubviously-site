import { ImageResponse } from "next/og";

export const alt = "Untanggy — Untangle your HubSpot portal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social card with the two-tone Untanggy wordmark on the soft brand tint.
// Generated at build
// time; twitter-image.tsx re-exports it so both tags share one image.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff1ea",
        }}
      >
        <div style={{ display: "flex", fontSize: 160, fontWeight: 700 }}>
          <span style={{ color: "#1A1A2E" }}>Un</span>
          <span style={{ color: "#E8501A", marginLeft: -14 }}>tanggy</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 44,
            fontWeight: 500,
            color: "#5b6473",
          }}
        >
          Untangle your HubSpot portal
        </div>
      </div>
    ),
    size
  );
}
