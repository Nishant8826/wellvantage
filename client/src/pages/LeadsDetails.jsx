import Basic from "@/components/leadDetails/Basic";
import Preferences from "@/components/leadDetails/Preferences";
import Status from "@/components/leadDetails/Status";
import { updateLead } from "@/services/api";
import { updateSelectedLead } from "@/store/leadSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const LeadsDetails = () => {
  const { selectedLead } = useSelector(state => state.leads)
  const [activeTab, setActiveTab] = useState("basic");
  const [formData, setFormData] = useState(selectedLead || {});
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName) {
      return toast.error(`${formData.firstName ? 'Last name is required' : 'First name is required'}`)
    }
    // if (!formData?._id) return;

    try {
      const resp = await updateLead(formData);
      console.log("Lead updated successfully:", resp);
      dispatch(updateSelectedLead(formData));
      toast.success('Lead updated successfully!');
    } catch (error) {
      console.error("Error updating lead:", error);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value, }));
  };


  useEffect(() => {
    if (selectedLead) setFormData(selectedLead);
  }, [selectedLead]);

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-5">
      <div className="border-b flex space-x-6 mb-6">
        {["basic", "preferences", "status"].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-2 text-xl font-semibold capitalize hover:cursor-pointer ${activeTab === tab ? "border-b-2 border-green-600 text-green-600" : "text-gray-500 hover:text-green-600 cursor-pointer"}`}>
            {tab}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {activeTab === "basic" && (
          <Basic formData={formData} onChange={handleChange} />
        )}

        {activeTab === "preferences" && (
          <Preferences formData={formData} onChange={handleChange} />
        )}

        {activeTab === "status" && (
          <Status formData={formData} onChange={handleChange} />
        )}

        <div className="flex justify-center mt-6">
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 cursor-pointer" >
            Update Lead
          </button>
        </div>
      </form>
    </div>
  );
}


export default LeadsDetails;