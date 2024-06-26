export async function sendRequest(
  companyName: string,
  salesId: string,
  rate: string,
  adminEmail: string
) {
  fetch("/api/sendEmail/signRequest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Client Management <noreplay@management-clients.vercel.app>",
      to: [`${adminEmail}`],
      subject: "New company sign request project submited!",
      companyName,
      salesId,
      rate,
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
