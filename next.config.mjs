/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Fully static export — no server, no serverless functions on Netlify.
     `next build` writes plain HTML/CSS/JS to ./out */
  output: 'export',
  /* Emit /blog/index.html etc. so folder URLs resolve on any static host */
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
