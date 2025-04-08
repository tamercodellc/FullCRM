import { CompanyList } from './companies/company-list'

export const AdminComponents = {
  'Company List': CompanyList
}

export function AdminContent({ section }) {
  const Component = AdminComponents[section?.title] || AdminComponents['Company List']
  return <Component />
}