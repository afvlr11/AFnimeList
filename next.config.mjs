/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['10.26.206.76'],
    images: {
        remotePatterns: [
          {
            hostname: "cdn.myanimelist.net",
          },
        ],
    },
};

export default nextConfig;
