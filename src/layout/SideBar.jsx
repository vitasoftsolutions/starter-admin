import { Button, Layout, Menu } from "antd";
import { TbArrowBadgeRight } from "react-icons/tb";
import { sidebarItemsGenerator } from "../utilities/lib/sidebarItemsGenerator";
import { userPaths } from "../routes/user.routes";
import scrollToTop from "../utilities/lib/scrollToTop";

const { Sider } = Layout;

const SideBar = ({ collapsed, setCollapsed }) => {
  const sidebarItems = sidebarItemsGenerator(userPaths);

  return (
    <div className="relative bg-white border-r border-gray-200 drop-shadow-primary">
      <Sider
        className="h-screen"
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Menu
          mode="inline"
          className="mt-5"
          items={sidebarItems}
          onClick={scrollToTop}
        />
      </Sider>

      <Button
        className="absolute top-0 -right-5 mt-2 mr-2 bg-white border border-gray-200 rounded-full"
        type="text"
        icon={
          collapsed ? (
            <TbArrowBadgeRight className="text-xl" />
          ) : (
            <TbArrowBadgeRight className="rotate-180 text-xl" />
          )
        }
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
        }}
      />
    </div>
  );
};

export default SideBar;
