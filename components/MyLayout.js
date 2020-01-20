import React from "react";

import Header from "./Header";

export default function MyLayout(props) {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">{props.children}</div>
    </div>
  );
}
