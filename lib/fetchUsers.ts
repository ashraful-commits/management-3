export async function fetchUsers(role) {
  const userRole = role
  try {
    const response = await fetch("/api/user?role=" + userRole) // Replace with your API endpoint
    let data = await response.json()
    data = data.users
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export async function fetchSales(upSellerId) {
  const id = upSellerId
  try {
    const response = await fetch("/api/user?upSellerId=" + id) // Replace with your API endpoint
    let data = await response.json()
    data = data.users
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export async function fetchAllUsers(admin) {

  if(admin){
    try {
      const response = await fetch(`/api/user?admin=${admin}`)
      let data = await response.json()
      return data.users
    } catch (error) {
      console.error("Error fetching data:", error)
      throw error
    }
  }else{
    try {
      const response = await fetch('/api/user')
      let data = await response.json()
      return data.users
    } catch (error) {
      console.error("Error fetching data:", error)
      throw error
    }
  }
  
}
