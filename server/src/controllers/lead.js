const User = require("../modals/user");
const TryCatch = require("../utils/tryCatch");
const jwt = require('jsonwebtoken');
const config = require("../config/config");
const Leads = require("../modals/lead");
const ErrorClass = require("../utils/ErrorClass");

exports.fetchAllLeads = TryCatch(async (req, res, next) => {
    let leads = await Leads.find({});
    res.status(200).json({ success: true, leads });
});

exports.updateLead = TryCatch(async (req, res, next) => {
    const updateData = { ...req.body }; // copy to avoid mutating req.body

    // Remove _id to prevent overwriting
    delete updateData._id;

    const lead = await Leads.findById(req.body._id);
    if (!lead) return next(new ErrorClass("Lead not found", 404));

    for (const key in updateData) {
        if (updateData.hasOwnProperty(key)) {
            // Merge nested objects (like preferences), otherwise assign directly
            if (typeof updateData[key] === "object" && !Array.isArray(updateData[key])) {
                lead[key] = { ...lead[key], ...updateData[key] };
            } else {
                lead[key] = updateData[key];
            }
        }
    }

    await lead.save();

    res.status(200).json({
        success: true,
        message: "Lead updated successfully",
        lead,
    });
});
