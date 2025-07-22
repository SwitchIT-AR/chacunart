import { Outlet } from "react-router";
import Layout from "../components/Layout";

export default function RootPage() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}