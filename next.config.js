/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
		domains: ['localhost', 'cepa-cms.s3.sa-east-1.amazonaws.com', 'progresividadtributaria.tk'],
	},
}

module.exports = nextConfig
