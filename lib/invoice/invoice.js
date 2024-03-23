import { getBaseUrl } from "../getBaseUrl"

export async function invoicebyPid(projectId) {
  try {
    const response = await fetch(
      `${getBaseUrl()}/invoice/?projectId=${projectId}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    )
    let data = await response.json()

    data = data.invoices
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}
