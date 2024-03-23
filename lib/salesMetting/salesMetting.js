import { getBaseUrl } from "../getBaseUrl"

export async function fetchMeetings() {
  try {
    const response = await fetch(`${getBaseUrl()}/api/salesmetting`, {
      method: "GET",
      cache: "no-cache",
    })
    let data = await response.json()
    data = data.meetings
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export async function DeleteMeetings(id) {
  try {
    const response = await fetch(`${getBaseUrl()}/api/salesmetting?id=${id}`, {
      method: "DELETE",
      cache: "no-cache",
    })
    let data = await response.json()
    data = data.meetings
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}
