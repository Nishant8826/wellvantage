import { theme } from "@/config/config";
import { selectLead } from "@/store/leadSlice";
import React, { useState } from "react";
import { FaWhatsapp, FaEdit, FaCube } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiFire, HiSun, HiOutlineStar } from "react-icons/hi";

const LeadManagement = ({ leads }) => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState("Active");
    const [search, setSearch] = useState("");

    const filteredLeads = leads.filter((lead) => {
        const query = search.toLowerCase();
        const fullName = `${lead.firstName} ${lead.lastName}`.toLowerCase();

        return (
            fullName.includes(query) || (lead.firstName && lead.firstName.toLowerCase().includes(query)) ||
            (lead.lastName && lead.lastName.toLowerCase().includes(query)) ||
            (lead.email && lead.email.toLowerCase().includes(query)) ||
            (lead.phone && lead.phone.includes(query)) ||
            (lead.assignedTo && lead.assignedTo.toLowerCase().includes(query))
        );
    });

    const handleSelectedLead = (lead) => {
        dispatch(selectLead(lead));
    }

    return (
        <div className="flex-1 bg-gray-50 p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Lead Management</h2>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">+</button>
            </div>

            <div className="flex items-center border-b border-gray-200 mb-4">
                {["Active", "Archived"].map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 -mb-px font-semibold ${activeTab === tab ? "border-b-2 border-green-600 text-green-600" : "text-gray-500"}`}>
                        {tab}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 items-center mb-4">
                <input type="text" placeholder="Search" style={{ color: theme.inputLabelColor }} className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 placeholder-gray-400"
                    value={search} onChange={(e) => setSearch(e.target.value)} />
                <select style={{ color: theme.inputLabelColor, borderColor: theme.inputBorderColor }} className="border border-gray-300 rounded px-3 py-2">
                    <option>Interest Level</option>
                    <option>Hot</option>
                    <option>Warm</option>
                    <option>Cold</option>
                </select>
                <select style={{ color: theme.inputLabelColor, borderColor: theme.inputBorderColor }} className="border border-gray-300 rounded px-3 py-2">
                    <option>Assigned To</option>
                    <option>Ashutosh</option>
                    <option>Nishant</option>
                </select>
                <select style={{ color: theme.inputLabelColor, borderColor: theme.inputBorderColor }} className="border border-gray-300 rounded px-3 py-2">
                    <option>Created At</option>
                </select>
                <select style={{ color: theme.inputLabelColor, borderColor: theme.inputBorderColor }} className="border border-gray-300 rounded px-3 py-2">
                    <option>Name Alphabetical</option>
                </select>
            </div>

            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full text-sm text-left border-collapse">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Interest Level</th>
                            <th className="px-4 py-2">Assigned To</th>
                            <th className="px-4 py-2">Last Interaction</th>
                            <th className="px-4 py-2">Follow Up</th>
                            <th className="px-4 py-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLeads.map((lead) => (
                            <tr key={lead._id} onClick={() => handleSelectedLead(lead)} className="border-b hover:bg-gray-50 transition cursor-pointer" >
                                <td className="p-2 flex items-center gap-2">
                                    <HiOutlineUserCircle className="text-gray-400 w-5 h-5" />
                                    <span className=" text-blue-600 cursor-pointer hover:underline">
                                        {lead.firstName}{' '}{lead.lastName}
                                    </span>
                                </td>
                                <td className="px-4 py-2">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 w-fit ${lead.interestLevel === "Hot" ? "bg-red-100 text-red-600" : lead.interestLevel === "Warm" ? "bg-yellow-100 text-yellow-600" : "bg-blue-100 text-blue-600"}`}>

                                        {lead.interestLevel === "Hot" && <HiFire className="w-4 h-4" />}
                                        {lead.interestLevel === "Warm" && <HiSun className="w-4 h-4" />}
                                        {lead.interestLevel === "Cold" && <HiOutlineStar className="w-4 h-4" />}

                                        {lead.interestLevel}
                                    </span>
                                </td>
                                <td className="px-4 py-2">{lead.assignedTo}</td>
                                <td className="px-4 py-2">{lead.inquiryDate}</td>
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 text-xs rounded">
                                        {lead.followUpStatus}
                                    </span>
                                </td>
                                <td className="px-4 py-2 flex gap-3 justify-center">
                                    <button className="text-green-600 hover:text-green-700">
                                        <FaWhatsapp className="h-6 w-6" />
                                    </button>
                                    <button className="text-blue-600 hover:text-blue-700">
                                        <FaEdit className="h-5 w-5" />
                                    </button>
                                    <button className="text-gray-600 hover:text-gray-800">
                                        <FaCube className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};


export default LeadManagement;
