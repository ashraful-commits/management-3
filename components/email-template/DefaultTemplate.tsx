import * as React from "react"
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface EmailPlaceholderProps {
  name: string
  upseller: string
  subject: string
}

const baseUrl = "https://management-clients.vercel.app"

export const DefaultTemplate = ({
  name,
  upseller,
  subject: subject,
}: DefaultTemplate) => (
  <Html>
    <Head />
    <Preview> Your Management</Preview>
    <Body style={main}>
      <Container style={container-fluid}>
        <Img
          src={`${baseUrl}/logo.png`}
          width={120}
          height={60}
          alt="Management Fam"
        />
        <Heading style={heading}>{subject}</Heading>
        <Section style={body}>
          <Text style={paragraph}>
            Hello, <b>{name}</b> <br />
            <b>{upseller}</b> would like you to join as a sales rep at Business.
            Please click on the accept button to accept the invitation.
          </Text>
          <Link
            style={link}
            href="https://management-clients.vercel.app/invitation"
            target="_blank"
          >
            👉 Accept Invitation 👈
          </Link>
        </Section>
        <Text style={paragraph}>Business Team</Text>
        <Hr style={hr} />
        <Img
          src={`${baseUrl}/logo.png`}
          width={80}
          height={42}
          alt="Management Fam"
          style={{
            WebkitFilter: "grayscale(100%)",
            filter: "grayscale(100%)",
            margin: "20px 0",
          }}
        />
        <Text style={footer}>Management Fam</Text>
        <Text style={footer}>2010-2024 All Rights Reserved</Text>
      </Container>
    </Body>
  </Html>
)

export default DefaultTemplate

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
}

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
}

const body = {
  margin: "24px 0",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
}

const link = {
  color: "#FF6363",
}

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
}
