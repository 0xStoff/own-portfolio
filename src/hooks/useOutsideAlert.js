import { useEffect } from "react";

export default function useOutsideAlerter(ref, onClick) {
  const handleClickOutside = (event) =>
    ref.current && !ref.current.contains(event.target) && onClick();

  const escFunction = (event) => event.key === "Escape" && onClick();

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [ref]);

  return ref;
}
