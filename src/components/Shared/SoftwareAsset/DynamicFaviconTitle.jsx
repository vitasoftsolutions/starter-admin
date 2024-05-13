import { useEffect, useState } from "react";
import { useGetAllSystemAssetSettingsQuery } from "../../../redux/services/systemAssetSetting/systemAssetSettingApi";

const DynamicFaviconTitle = () => {
  const [title, setTitle] = useState("Loading...");
  const [favicon, setFavicon] = useState(null);

  const { data } = useGetAllSystemAssetSettingsQuery();

  useEffect(() => {
    try {
      if (data) {
        setTitle(data?.data?.title);
        setFavicon(data?.data?.favicon);
      }
    } catch (error) {
      setTitle("Loading...");
      setFavicon(null);
    }
  }, [data]);

  useEffect(() => {
    document.title = title;
    const faviconElement = document.querySelector('link[rel="icon"]');
    if (faviconElement) {
      faviconElement.href = favicon;
    }
  }, [title, favicon]);

  return null;
};

export default DynamicFaviconTitle;
