/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./sitemap/generate-sitemap");
		}
		return config;
	},
};

module.exports = nextConfig;
