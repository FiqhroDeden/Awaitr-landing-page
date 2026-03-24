import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Awaitr — Track Everything You're Waiting For";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          background: "linear-gradient(135deg, #1A1A2E 0%, #2D2B55 50%, #1A1A2E 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(108, 99, 255, 0.3), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(226, 75, 74, 0.25), transparent)",
          }}
        />

        {/* App icon */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "linear-gradient(135deg, #6C63FF, #E24B4A)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            boxShadow: "0 20px 60px rgba(108, 99, 255, 0.4)",
          }}
        >
          <span style={{ fontSize: 56, color: "white", fontWeight: 700 }}>A</span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.02em",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Track Everything
          </span>
          <span
            style={{
              fontSize: 56,
              fontWeight: 800,
              background: "linear-gradient(135deg, #6C63FF, #E24B4A, #BA7517)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.02em",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            You're Waiting For
          </span>
        </div>

        {/* Subtitle */}
        <span
          style={{
            fontSize: 22,
            color: "rgba(240, 237, 232, 0.7)",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Free · Offline · No Account Needed · iOS 26+
        </span>

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 24,
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: 20,
            padding: "8px 20px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <span style={{ fontSize: 16, color: "rgba(255, 255, 255, 0.9)" }}>
            Available on the App Store
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
