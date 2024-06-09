import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    return () => {
      console.log("Even Unmount");
    };
  }, []);
  return <div>Even입니다.</div>;
};

export default Even;
