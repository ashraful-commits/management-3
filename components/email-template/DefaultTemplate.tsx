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

const baseUrl = "http://salesfam.com"

export const DefaultTemplate = ({
  name,
  upseller,
  subject: subject,
}: DefaultTemplate) => (
  <Html>
    <Head />
    <Preview>Unleash Your Sales Potential with Sales Fam.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/logo.png`}
          width={120}
          height={60}
          alt="Sales Fam"
        />
        <Heading style={heading}>{subject}</Heading>
        <Section style={body}>
          <Text style={paragraph}>
            Hello, <b>{name}</b> <br />
            <b>{upseller}</b> would like you to join as a sales rep at SalesFam.
            Please click on the accept button to accept the invitation.
          </Text>
          <Link
            style={link}
            href="https://salesfam.com/invitation"
            target="_blank"
          >
            👉 Accept Invitation 👈
          </Link>
        </Section>
        <Text style={paragraph}>SalesFam Team</Text>
        <Hr style={hr} />
        <Img
          src={`${baseUrl}/logo.png`}
          width={80}
          height={42}
          alt="Sales Fam"
          style={{
            WebkitFilter: "grayscale(100%)",
            filter: "grayscale(100%)",
            margin: "20px 0",
          }}
        />
        <Text style={footer}>Sales Fam</Text>
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
