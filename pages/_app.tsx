import "../styles/main.css";

import React from "react";
import {NextComponentType} from "next";

interface ICustomApp {
  Component: NextComponentType;
  pageProps: any;
}

export default function CustomApp({Component, pageProps}: ICustomApp) {
  return <Component {...pageProps} />;
}
