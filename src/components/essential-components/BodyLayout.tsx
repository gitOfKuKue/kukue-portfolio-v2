import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const BodyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col min-h-screen bg-background">
      {children}
    </section>
  );
};

export default BodyLayout;
