import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div
      className="p-3 px-5 flex justify-between shadow-md fixed top-0 w-[100%] z-999"
      style={{ backgroundColor: "#eff2f9", zIndex: 999}}
    >
      <Link to="/">
        <img
          src="/logo_black-removebg.png"
          alt="logo"
          width={40}
          height={40}
          className="w-16"
        />
      </Link>
      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
