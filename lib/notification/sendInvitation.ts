export async function sendInvitation(
  name: string,
  email: string,
  upseller: string
) {
  fetch("/api/sendEmail/invitation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Sales Fam <noreplay@localhost:8000>",
      to: [`${email}`],
      subject: "clientManagement Invitation",
      name,
      upseller,
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
