import React, { useState } from "react";
import { Home, ClipboardList, LogOut, Menu, X } from "lucide-react";
import banner from "../assets/banner.png";
import avatar from "../assets/avatar.jpg";
import { theme } from "@/config/config";
import { useSelector } from "react-redux";

const menuItems = [
    { name: "Dashboard", icon: <Home size={18} />, path: "/dashboard" },
    { name: "Lead Management", icon: <ClipboardList size={18} />, path: "/lead" },
];

const Sidebar = () => {
    const { user } = useSelector((state) => state.auth);
    const [isOpen, setIsOpen] = useState(false);

    console.log(user);

    return (
        <>
            <div className="md:hidden flex justify-end p-4 shadow" style={{ backgroundColor: theme.secondary }}>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={20} /> : <Menu className="mb-auto" size={24} />}
                </button>
            </div>

            <div className={`fixed md:static top-0 left-0 h-screen w-64 z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col justify-between`} style={{ backgroundColor: theme.secondary }}>
                <div className="md:hidden flex justify-end p-4 absolute top-0 right-0">
                    <button onClick={() => setIsOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div className="mt-10">
                    <div style={{ backgroundColor: theme.secondary }} className="flex items-center flex-col gap-2 p-4 border-b" >
                        <img src={banner} alt="Logo" className="w-20 h-24" />
                    </div>
                    <ul className="mt-2">
                        {menuItems.map((item) => (
                            <li key={item.name} className="flex items-center gap-3 px-4 py-2 hover:bg-green-700 rounded-lg cursor-pointer" >
                                {item.icon}
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ backgroundColor: theme.secondary }} className="p-4 flex flex-col" >
                    <div className="flex items-center gap-2 mb-2 rounded-lg p-2" style={{ backgroundColor: "#28A74545", border: "#28A7454F" }} >
                        <img src={avatar} alt="User" className="rounded-full h-7 w-7" />
                        <div>
                            <p className="text-sm font-semibold">{user?.name ? user.name.charAt(0).toUpperCase() + user.name.slice(1) : ""}</p>
                            <p className="text-xs">Manager</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-3 px-4 py-2 hover:bg-green-700 rounded-lg cursor-pointer">
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
