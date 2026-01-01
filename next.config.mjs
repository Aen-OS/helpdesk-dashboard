/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/tickets",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
