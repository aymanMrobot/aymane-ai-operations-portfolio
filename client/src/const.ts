export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE =
  import.meta.env.VITE_APP_TITLE || "Aymane El Magri - AI Operations Portfolio";

export const APP_LOGO = "/aymane-el-magri-headshot.jpeg";

export const getLoginUrl = () => {
  return "/";
};
