import React from "react"
import Navbar from "../navbar/Navbar"

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="container ">
            <div className="py-2">
                <Navbar />
            </div>
            <div className="flex h-calc-full-nav_height">
                <aside className="w-[25%] h-100 border md:w-[15%]"></aside>
                <main className="flex-grow h-100 border py-5 px-3 text-center">{children}</main>
            </div>
        </div>
    )
}

export default Layout