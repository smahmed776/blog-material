/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DATABASE_PASSWORD: "Egm9LAKChDGaUyB2",
    MONGO_URI: "mongodb+srv://smahmed:Egm9LAKChDGaUyB2@blog.uw56f.mongodb.net/blog?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
