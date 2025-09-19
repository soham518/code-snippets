import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;