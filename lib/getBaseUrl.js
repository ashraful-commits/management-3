export const getBaseUrl = () => {
  const isProduction = process.env.NODE_ENV === "production"
  const baseUrl = isProduction
    ? "https://management-clients.vercel.app"
    : "https://management-clients.vercel.app"
  return baseUrl
}
