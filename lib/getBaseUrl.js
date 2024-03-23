export const getBaseUrl = () => {
  const isProduction = process.env.NODE_ENV === "production"
  const baseUrl = isProduction
    ? "https://salesfam.com"
    : "http://localhost:8080"
  return baseUrl
}
