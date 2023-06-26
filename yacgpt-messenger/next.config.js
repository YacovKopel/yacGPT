/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{
    appDir:true,
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'links.papareact.com']
  },
}

module.exports = nextConfig
