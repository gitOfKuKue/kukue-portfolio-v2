import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`${className} w-[1600px] mx-auto`}>{children}</section>
  );
};

export default Container;
