import { useEffect } from "react";

export default function DynamicTitle(title: string) {
  useEffect(() => {
    document.title = title;

    const pageFocus = () => {
      if (document.visibilityState === "visible") {
        document.title = title;
      } else {
        document.title = "Jakub Kłało - Portfolio / klalo.pl";
      }
    };

    document.addEventListener("visibilitychange", pageFocus);
    return () => document.removeEventListener("visibilitychange", pageFocus);
  }, [title]);

  return null;
}
