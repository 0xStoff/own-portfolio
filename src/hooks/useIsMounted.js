import { useRef, useEffect } from "react";

export default function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    return () => {
      isMounted.current = true;
    };
  }, []);

  return isMounted;
}
