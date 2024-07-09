import Link from "next/link";

interface NavLinkProps {
  link: string;
}
function NavLink({ link }: NavLinkProps) {
  return (
    <li style={{ cursor: "pointer" }}>
      <Link href={`/${link}`}>{link}</Link>
    </li>
  );
}

export default NavLink;
