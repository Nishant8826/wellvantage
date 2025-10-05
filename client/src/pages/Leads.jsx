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
            <div className="flex h-screen items-center justify-center text-lg">
                Loading Leads...
            </div>
        );
    }

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
                {selectedLead && selectedLead._id ? (
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