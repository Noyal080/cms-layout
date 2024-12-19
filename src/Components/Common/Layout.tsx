// src/components/Layout.tsx
import React from "react";
import Navbar from "../Navbar/default";
// import Navbar from "./Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main style={{ paddingTop: 64 }} className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; 2023 E-Commerce. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
