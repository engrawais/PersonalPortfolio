"use client";

import { useEffect } from "react";

/**
 * Shareable URL: /muhammad-awais/software-engineer/
 * Redirects to the main portfolio (same content as home).
 */
export default function ShareLandingPage() {
  useEffect(() => {
    const path = "/";
    window.location.replace(path);
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif", color: "#444" }}>
      <p>Opening portfolio…</p>
      <p>
        <a href="/">Continue here if you are not redirected</a>
      </p>
    </main>
  );
}
