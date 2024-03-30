export const getBaseUrl = () => {
  const isProduction = process.env.NODE_ENV === "production"
  const baseUrl = isProduction
    ? "https://localhost:8000"
    : "http://localhost:8080"
  return baseUrl
}
