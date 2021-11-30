import React from "react";

const Header = () => {
  return (
    <div className="app-header">
      <h1>Notes App</h1>
      <span>
        by{" "}
        <a
          href="https://atharvacm.netlify.app"
          target="_blank"
          className="header-link"
          rel="noreferrer"
        >
          AtharvaCM
        </a>
      </span>
    </div>
  );
};

export default Header;
