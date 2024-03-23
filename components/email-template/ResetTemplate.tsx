import * as React from "react"
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components"

interface PasswordResetRequestProps {
  salesName: string
  mainEmail: string
}

const company = "SalesFam"
// const baseUrl = "http://localhost:8080"
const baseUrl = "https://salesfam.com"

export const PasswordResetRequest: React.FC<PasswordResetRequestProps> = ({
  salesName,
  mainEmail,
}) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/logo.png`}
          width={120}
          height={60}
          alt={company}
        />
        <Section style={body}>
          <Text style={heading}>Dear {salesName},</Text>
          <Text style={paragraph}>
            You recently requested a password reset for your account. Please
            follow the instructions below to reset your password:
          </Text>
          <Link
            href={`${baseUrl}/reset-password`}
            target="_blank"
            style={resetPass}
          >
            Reset Password
          </Link>
          <Text style={paragraph}>
            If you encounter any issues, feel free to reach out to our support
            team at {mainEmail} or by replying to this email.
          </Text>
          <Text style={closing}>Best regards,</Text>
          <Text style={signature}>Sales Fam</Text>
          <Text style={footer}>© 2010-2024 {company}. All Rights Reserved</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: "#f5f5f5",
  fontFamily: "Arial, sans-serif",
}

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
}

const body = {
  margin: "24px 0",
}

const heading = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "16px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  marginBottom: "16px",
}

const resetPass = {
  color: "#007bff",
  fontSize: "16px",
  textDecoration: "none",
}

const closing = {
  marginTop: "24px",
}

const signature = {
  fontSize: "18px",
  fontWeight: "bold",
}

const footer = {
  fontSize: "12px",
  color: "#6c757d",
  marginTop: "24px",
}
