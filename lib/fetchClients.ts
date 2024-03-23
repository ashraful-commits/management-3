export async function fetchClients(salesPerson) {
  try {
    const response = await fetch(`/api/client?salesperson=${salesPerson}`, {
      method: "GET",
      cache: "no-cache",
    }) // Replace with your API endpoint

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return data.client.reverse()
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export async function fetchAllClients(role) {
  try {
    const response = await fetch(`/api/client?SuperAdmin=${role}`, {
      method: "GET",
      cache: "no-cache",
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data.client
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}
