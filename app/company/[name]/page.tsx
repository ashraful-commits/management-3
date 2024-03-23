import Company from "../../../components/company/Company"

export default async function SingleCompany({ params }) {
  const companyName = params?.name.toLowerCase()
  return (
    <div className="min-w-[1400px]">
      <Company name={companyName} />
    </div>
  )
}
