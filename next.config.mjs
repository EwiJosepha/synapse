// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['www.google.com', 'iconscout.com', 'freepik.com', 'vecteezy.com', 'icons8.com', 'storyset.com', 'svgrepo.com'],
    },
    // Add CORS configuration
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3000/api/:path*', // Replace with your actual API server URL
        },
      ];
    },
    // Set HTTP port
    port: "", // Adjust to your desired port
    // Set public path name
    basePath: '/my-app', // Adjust to your desired path name
  };
  
  export default nextConfig;