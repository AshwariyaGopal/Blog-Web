// import type { NextConfig } from "next";
// import { hostname } from "os";

// const nextConfig: NextConfig = {
//   /* config options here */
// images:{
//   remotePatterns:[
// {
//   protocol:'https',
//   hostname:'cdn.sanity.io'
// }
//   ]
// }
   
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

module.exports = nextConfig;
