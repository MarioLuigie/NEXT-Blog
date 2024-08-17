/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pexels.com"
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "cinevoyage.s3.eu-north-1.amazonaws.com"
      },
    ]
  },
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/dashboard',
      //   permanent: true, 
      // },
    ];
  },
};

export default nextConfig;
