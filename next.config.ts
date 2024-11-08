import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    appIsrStatus: false,
  },
};
module.exports = {
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: 'assets.aceternity.com',
		},
	  ],
	},
  };

export default nextConfig;
