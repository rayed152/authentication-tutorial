import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-full flex items-center justify-center"
      suppressHydrationWarning
    >
      {children}
    </div>
  );
};

export default AuthLayout;
