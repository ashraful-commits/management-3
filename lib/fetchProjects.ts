export async function fetchProjects() {
  try {
    const response = await fetch("/api/project", {
      method: "GET",
      cache: "no-cache",
    }) // Replace with your API endpoint

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data.projects.reverse()
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export async function fetchProjectsBySales(salesPerson) {
  try {
    const response = await fetch(`/api/project?salesperson=${salesPerson}`, {
      method: "GET",
      cache: "no-cache",
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data.project
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export async function fetchProjectById(projectId) {
  try {
    const response = await fetch(`/api/project?id=${projectId}`, {
      method: "GET",
      cache: "no-cache",
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data.project
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}
