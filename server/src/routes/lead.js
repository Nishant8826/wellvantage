const express = require("express");
const { fetchAllLeads, updateLead } = require("../controllers/lead");
const leadRoutes = express.Router();

leadRoutes.get("/all", fetchAllLeads);
leadRoutes.put("/update", updateLead);

module.exports = leadRoutes;
