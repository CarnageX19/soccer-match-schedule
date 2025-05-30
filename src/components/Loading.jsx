import React from "react";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-white text-black text-center px-4">
      <div className="text-xl font-semibold mb-2">Fetching match data...</div>
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid mb-4"></div>
      <p className="text-sm text-gray-600 max-w-sm">
        This project uses a free-tier Render server which may take a while to wake up. Thanks for your patience!
      </p>
    </div>
  );
}

export default Loading;