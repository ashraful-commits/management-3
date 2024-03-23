import { getBaseUrl } from "./getBaseUrl"

export async function getUser(userId) {
  try {
    const response = await fetch(`${getBaseUrl()}/api/user?id=${userId}`, {
      method: "GET",
      cache: "no-cache",
    })
    let data = await response.json()
    data = data.user
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export async function getallUser() {
  try {
    const response = await fetch(`${getBaseUrl()}/api/user`, {
      method: "GET",
      cache: "no-cache",
    })
    let data = await response.json()
    data = data.users
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}
