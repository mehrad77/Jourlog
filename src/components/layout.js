import React from "react";
import { Link } from "gatsby";
import Logo from "./Logo";
import ThemeSwitch from './ThemeSwitch';
import Footer from "./footer";
import { scale } from "../utils/typography";
import "./global.css";

const Layout = ({ topContent, children }) => {
  const header = (
    <>
      <ThemeSwitch />
      <h2
        style={{
          ...scale(1),
          marginBottom: 0,
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <Logo /> 
        </Link>
      </h2>
    </>
  )

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--textNormal)",
        transition: "color 0.2s ease-out, background 0.2s ease-out",
        minHeight: "100vh",
      }}
    >
      <div className="sidebar">
        <div
          className="md:h-screen p-4 flex flex-col justify-center items-center"
        >
          {header}
        </div>
      </div>

      <div className="main-content relative">
        {topContent}
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
