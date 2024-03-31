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
      from: "Client Management <noreplay@management-clients.vercel.app>",
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
