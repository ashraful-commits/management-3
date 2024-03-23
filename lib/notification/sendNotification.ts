export async function sendAdminNotification(
  projectName: string,
  salesPerson: string,
  adminEmail: string
) {
  fetch("/api/sendEmail/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Sales Fam <noreplay@salesfam.com>",
      to: [`${adminEmail}`],
      subject: "New project submited!",
      projectName,
      salesPerson,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error("Error:", error)
    })
}

export async function sendUserNotification(
  projectName: string,
  salesPerson: string,
  salesPersonEmail: string
) {
  fetch("/api/sendEmail/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Sales Fam <noreplay@salesfam.com>",
      to: [`${salesPersonEmail}`],
      subject: "You submited a new project!",
      projectName,
      salesPerson,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error("Error:", error)
    })
}
