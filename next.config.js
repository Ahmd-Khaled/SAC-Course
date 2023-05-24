/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // env: {
  //   MONGO_URI: "mongodb+srv://ahmdkhaldd:Et7494780@cluster0.fxmpaqv.mongodb.net/products-app",
  //   APP_PROD: "https://ahmedkhald.com",
  //   APP_DEV: "http://localhost:3000",
  // },
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "cdn.britannica.com", "images.heb.com"]
  }
}

module.exports = nextConfig
