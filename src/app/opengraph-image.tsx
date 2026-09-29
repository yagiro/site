import { ImageResponse } from "next/og";

export const alt = "yakir / dev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0021ff",
        }}
      >
        <svg width="420" height="420" viewBox="0 0 32 32" fill="none">
          <path
            d="M6 5L18 16L6 27"
            stroke="white"
            strokeWidth="5.4"
            strokeLinecap="round"
          />
          <rect x="20" y="22" width="10" height="4.4" rx="1.5" fill="white" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
