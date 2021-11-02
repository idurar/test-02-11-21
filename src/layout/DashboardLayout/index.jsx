import React from "react";

import HeaderContent from "../HeaderContent";

export default function DashboardLayout({ children }) {
  return (
    <div
      style={{
        padding: "30px 20px",
        margin: "20px auto",
        width: "100%",
        maxWidth: "1100px",
      }}
    >
      <HeaderContent />

      <div
        style={{
          margin: "5px 0",
          width: "100%",
          borderTop: "1px solid #efefef",
        }}
      >
        {children}
      </div>
    </div>
  );
}
