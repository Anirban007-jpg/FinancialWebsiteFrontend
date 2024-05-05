"use client"

const { default: Link } = require("next/link");
const { usePathname } = require("next/navigation")

const NavLink = ({link}) => {
    const pathname = usePathname();

    return (
        <Link className={`rounded lg:p-1 ${pathname === link.url && "bg-black text-white font-semibold"}`} href={link.url}>{link.title}</Link>
    )
}

export default NavLink