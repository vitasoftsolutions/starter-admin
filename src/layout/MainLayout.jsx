import { useState } from "react";
import { Layout } from "antd";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Profile from "../components/AllSection/Header/Profile";

const { Header, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="">
      <Header className="bg-white border-b-2 p-0">
        <Profile collapsed={collapsed} setCollapsed={setCollapsed} />
      </Header>
      <Layout>
        <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            backgroundColor: "white",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
