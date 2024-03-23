export async function fetchInvoices() {
  try {
    const response = await fetch("/api/invoice") // Replace with your API endpoint
    let data = await response.json()
    data = data.invoices
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}
export async function fetchInvoiceEarning() {
  try {
    const response = await fetch("/api/invoice")
    let data = await response.json()
    data = data.totalEarning
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}
export async function fetchInvoiceEarningByCompanyName(companyName) {
  try {
    const response = await fetch(`/api/invoice?companyName=${companyName}`) // Replace with your API endpoin`
    let data = await response.json()
    data = data.totalEarning
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export async function InvoicesbyProjectId(projectId) {
  try {
    const response = await fetch(`/api/invoice?projectId=${projectId}`) // Replace with your API endpoint
    let data = await response.json()
    data = data.invoices
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}
export async function InvoiceByUserId(userId) {
  try {
    const response = await fetch(`/api/invoice?userId=${userId}`) // Replace with your API endpoint
    let data = await response?.json()
    data = data.total
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}
export async function upSellerPercentage(id) {
  try {
    const response = await fetch(`/api/invoice?upsellerId=${id}`) // Replace with your API endpoint
    let data = await response?.json()
    data = data.commission
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}
