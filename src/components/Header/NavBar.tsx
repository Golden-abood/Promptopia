import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

const links = ["articles", "admin", "about", "login", "register"];
function NavBar() {
  return (
    <div className="container bg-purple-400 p-7">
      <div className="flex justify-between ">
        <Link href={"/"}> Cloud Hosting </Link>
        <ul className="flex justify-around gap-x-10">
          {links.map((el: string) => (
            <NavLink link={el} key={el} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
