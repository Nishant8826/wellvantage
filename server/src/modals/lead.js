const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    date: { type: String },
    text: { type: String },
});

const leadSchema = new mongoose.Schema(
    {
        /*************** Basic Info *********************/
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        phoneCode: { type: String, default: "+91" },
        phone: { type: String },
        email: { type: String, trim: true },
        gender: { type: String, enum: ["Male", "Female", "Other", "Select"], default: "Select" },
        dob: { type: String },
        height: { type: String },
        heightUnit: { type: String, default: "cm" },
        weight: { type: String },
        weightUnit: { type: String, default: "kg" },

        /*************** Preference Info *********************/
        activityLevel: {
            type: String,
            enum: ["Sedentary", "Lightly Active", "Moderately Active", "Very Active"],
            default: "Very Active",
        },
        wellnessGoals: {
            type: String,
            enum: ["Lose Weight", "Gain Weight", "Build Muscle", "Modify My Diet", "Manage Stress", "Improve Step Count"],
            default: "Lose Weight",
        },
        fitnessFocus: {
            type: String,
            enum: ["Gym Workout", "Yoga", "Meditation", "Nutrition", "Recovery", "Cardio", "CrossFit"],
            default: "Gym Workout",
        },
        gymTime: { type: String, enum: ["Morning", "Afternoon", "Evening", "Late Evening"], default: "Morning" },
        intensity: { type: String, enum: ["Light", "Moderate", "High"], default: "Light" },
        medicalConcerns: { type: String, enum: ["Diabetes", "Hypertension", "Asthama", "Back Pain", "None"], default: "Diabetes" },
        experience: { type: String, enum: ["Yes", "No"], default: "Yes" },

        /*************** Status Info *********************/
        inquiryDate: { type: String },
        assignedTo: { type: String, enum: ["Ram Mohan", "Amit Sharma"], default: "Ram Mohan" },
        interestLevel: { type: String, enum: ["Hot", "Warm", "Cold"], default: "Warm" },
        followUpStatus: { type: String, enum: ["New Ennquiry", "Needs Follow Up", "Engaged", "Converted", "Archived"], default: "New Ennquiry" },
        preferredPackage: { type: String, enum: ["Monthly", "Quarterly", "Yearly"], default: "Monthly" },
        preferredPTPackage: { type: String, enum: ["10 Sessions", "20 Sessions"], default: "10 Sessions" },
        heardAbout: { type: String, enum: ["Social Media", "Word Of Mouth", "Walk In", "WellVantage B2C App"], default: "Social Media" },
        notes: [noteSchema],

    },
    { timestamps: true }
);

const Lead = mongoose.model("Lead", leadSchema);
module.exports = Lead;
