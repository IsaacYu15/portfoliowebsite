import { useEffect, useState } from "react";

export const MOBILE = 480;
export const LARGE_MOBILE = 600;
export const TABLET = 960;

export const useIsLaptop = () => GetScreenSize() >= TABLET;
export const useIsMobile = () => GetScreenSize() <= MOBILE;
export const useIsLargeMobile = () => GetScreenSize() <= LARGE_MOBILE;

export const GetScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return screenWidth;
};
