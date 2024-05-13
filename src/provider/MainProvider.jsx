import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPrimaryColor,
  setSecondaryColor,
} from "../redux/services/theme/themeSlice";
import { theme } from "../utilities/configs/antDesignConfigs";
import { GlobalUtilityStyle } from "../styles/styled";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { useGetAllSystemAssetSettingsQuery } from "../redux/services/systemAssetSetting/systemAssetSettingApi";
import { router } from "../routes/Routes";

export const MainProvider = ({ children }) => {
  const dispatch = useDispatch();

  const { primaryColor, secondaryColor, textColor } = useSelector(
    (state) => state.theme
  );

  const { data } = useGetAllSystemAssetSettingsQuery();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primaryColor",
      data?.data?.primary_color ? data?.data?.primary_color : "#FF8100"
    );
    if (data) {
      dispatch(setPrimaryColor(data?.data?.primary_color));
      dispatch(setSecondaryColor(data.data?.base_color));
    }
  }, [data, dispatch]);

  const customTheme = theme({ primaryColor, secondaryColor, textColor });

  return (
    <GlobalUtilityStyle>
      <ConfigProvider
        theme={customTheme}
        locale={{
          locale: "en-US",
        }}
      >
        <ThemeProvider theme={{ ...customTheme }}>
          <RouterProvider router={router}>{children}</RouterProvider>
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </ConfigProvider>
    </GlobalUtilityStyle>
  );
};
