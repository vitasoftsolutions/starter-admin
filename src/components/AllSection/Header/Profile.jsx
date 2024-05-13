import { Avatar, Button, Popover } from "antd";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useGetAllSystemAssetSettingsQuery } from "../../../redux/services/systemAssetSetting/systemAssetSettingApi";
import { logout } from "../../../redux/services/auth/authSlice";
import { GlobalUtilityStyle } from "../../../styles/styled";
import { UserOutlined } from "@ant-design/icons";

const Profile = () => {
  const dispatch = useDispatch();
  const { data: systemAssetData } = useGetAllSystemAssetSettingsQuery();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully!", { duration: 2000 });
  };
  const content = (
    <GlobalUtilityStyle>
      <Button onClick={handleLogout} type="primary">
        Log Out
      </Button>
    </GlobalUtilityStyle>
  );

  return (
    <GlobalUtilityStyle>
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center ml-4">
          <div className="font-bold text-2xl text-primary cursor-pointer">
            {systemAssetData?.data?.logo ? (
              <img
                src={systemAssetData?.data?.logo}
                alt=""
                className="w-12 h-12"
              />
            ) : (
              "OMS"
            )}
          </div>
        </div>
        <Popover
          placement="bottomLeft"
          content={content}
          className="mr-4 cursor-pointer bg-primary"
        >
          <Avatar className="" size={40} icon={<UserOutlined />} />
        </Popover>
      </div>
    </GlobalUtilityStyle>
  );
};

export default Profile;
