import Navbar from "./Navbar";
import React from "react";

type pageProps = {
  children: React.ReactNode; //allows you to nest other components inside this component
};

export default function Layout(props: pageProps) {
  return (
    <>
      <Navbar />
      <div> {props.children} </div>
    </>
  );
}
