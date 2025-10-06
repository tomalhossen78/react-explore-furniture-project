import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <HashLoader color="green" size={80} />
    </div>
  );
};

export default Loading;
