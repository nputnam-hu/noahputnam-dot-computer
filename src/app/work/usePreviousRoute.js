"use client";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";

const usePreviousRoute = () => {
  const { asPath } = useRouter();

  const ref = useRef(null);

  console.log("asPath", asPath);

  useEffect(() => {
    ref.current = asPath;
  }, [asPath]);

  return ref.current;
};

export default usePreviousRoute;
