"use client"

import Link from "next/link"
import InputSearch from "./searchInput"

const Navbar = () => {
    return (
        
    <div className="bg-secondary">
        <div className="flex justify-between flex-col md:flex-row gap-2 p-4">
             <Link href="/" className="font-bold text-xl text-primary">AFnimeList</Link>
             <InputSearch/>
        </div>
    </div>
    )
}

export default Navbar