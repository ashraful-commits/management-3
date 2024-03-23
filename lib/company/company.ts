import { getBaseUrl } from "../getBaseUrl"

export async function fetchCompanies() {
  try {
    const response = await fetch(`${getBaseUrl()}/api/company`, {
      method: "GET",
      cache: "no-cache",
    })
    let data = await response.json()
    data = data.company
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export async function fetchCompany(companyName: string) {
  try {
    const response = await fetch(
      `${getBaseUrl()}/api/company?companyName=${companyName}`,
      { method: "GET", cache: "no-cache" }
    )
    let data = await response.json()
    data = data.company
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export async function deleteCompany(companyId: string) {
  try {
    const response = await fetch(
      `${getBaseUrl()}/api/company?companyId=${companyId}`,
      { method: "DELETE", cache: "no-cache" }
    )
    let data = await response.json()
    data = data.message
    return data
  } catch (error) {
    console.error("Error deleting data:", error)
    throw error
  }
}

// export async function fetchofferCompanies(companyNames: string[]) {
//   try {
//     const queryParams = companyNames
//       .map((name) => `companyName=${encodeURIComponent(name)}`)
//       .join("&")
//     const response = await fetch(`${getBaseUrl()}/api/company?${queryParams}`, {
//       method: "GET",
//       cache: "no-cache",
//     })

//     let data = await response.json()
//     data = data.companies // Assuming the response contains an array of companies
//     return data
//   } catch (error) {
//     console.error("Error fetching data:", error)
//     throw error
//   }
// }
