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
    const updateData = { ...req.body };
    const leadId = updateData._id ? updateData._id : null;
    delete updateData._id;
    let lead;

    if (leadId) {
        lead = await Leads.findById(leadId);
        if (!lead) return next(new ErrorClass("Lead not found", 404));
        for (const key in updateData) {
            if (updateData.hasOwnProperty(key)) {
                if (typeof updateData[key] === "object" && !Array.isArray(updateData[key])) {
                    lead[key] = { ...lead[key], ...updateData[key] };
                } else {
                    lead[key] = updateData[key];
                }
            }
        }

        await lead.save();
    } else {
        lead = await Leads.create(req.body);
    }

    return res.status(200).json({ success: true, message: `Lead ${leadId ? 'updated' : 'added'} successfully`, lead, });
});
