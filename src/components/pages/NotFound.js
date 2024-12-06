import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation(); 

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h1 className="text-4xl">Page Not Found</h1>
        <p className="mt-4 text-xl">This page <span className="font-bold">{location.pathname}</span> does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;
