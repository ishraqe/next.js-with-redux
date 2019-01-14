import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="section-header">
      <div className="container">
        <div className="wrapper">
          <div className="nav-container">
            <div className="logo-container">
              <span className="logo">Logo</span>
            </div>
            <div className="button-container">
              <Link as="/signUp" href="/auth/signUp">
                <button>Sign Up</button>
              </Link>
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
