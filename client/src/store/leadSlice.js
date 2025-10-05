import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    leads: [],
    selectedLead: null,
};

const leadSlice = createSlice({
    name: "lead",
    initialState,
    reducers: {
        setLeads: (state, action) => {
            state.leads = action.payload;
        },
        selectLead: (state, action) => {
            state.selectedLead = action.payload;
        },
        clearSelectedLead: (state) => {
            state.selectedLead = null;
        },
        updateSelectedLead: (state, action) => {
            if (state.selectedLead) {
                state.selectedLead = null;
            }
        },
    },
});

export const { setLeads, selectLead, clearSelectedLead, updateSelectedLead } = leadSlice.actions;

export default leadSlice.reducer;
