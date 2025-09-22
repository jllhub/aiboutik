import type { NextConfig } from "next";
import withPWAInit from "next-pwa";
import createNextIntlPlugin from "next-intl/plugin";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPWA(withNextIntl(nextConfig));
