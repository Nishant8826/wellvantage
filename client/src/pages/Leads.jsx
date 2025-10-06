import LeadManagement from '@/components/LeadManagement'
import Sidebar from '@/components/Sidebar'
import React, { useEffect, useState } from 'react'
import LeadsDetails from './LeadsDetails'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllLeads } from '@/services/api'
import toast from 'react-hot-toast'
import { setLeads } from '@/store/leadSlice'

const Leads = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { leads, selectedLead } = useSelector((state) => state.leads);


    useEffect(() => {
        const getLeads = async () => {
            try {
                const resp = await fetchAllLeads();
                dispatch(setLeads(resp?.leads || []))
            } catch (err) {
                console.error("Failed to fetch leads:", err);
                toast.error("Failed to load leads. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        getLeads();
    }, [selectedLead]);


    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-0"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                </div>
                <span className="text-lg text-gray-700">Loading Leads...</span>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
                {selectedLead ? (
                    <div className='px-6'>
                        <h1 className="text-xl font-bold my-4">Lead Management</h1>
                        <LeadsDetails leadId={selectedLead._id} />
                    </div>
                ) : (
                    <LeadManagement leads={leads} />
                )}
            </div>
        </div>
    )
}

export default Leads