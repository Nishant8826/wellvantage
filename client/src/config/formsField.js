/***************Preference Lead Management*********************/

export const initialBasicForm = {
    firstName: "",
    lastName: "",
    phoneCode: "+91",
    phone: "",
    email: "",
    gender: "Select",
    dob: "",
    height: "",
    heightUnit: "cm",
    weight: "",
    weightUnit: "kg",
};

export const basicFormFields = [
    { name: "firstName", label: "First*", type: "text", placeholder: "Enter first name" },
    { name: "lastName", label: "Last*", type: "text", placeholder: "Enter last name" },
    { name: "phone", label: "Phone", type: "phone" },
    { name: "email", label: "Email", type: "email", placeholder: "Enter email" },
    { name: "gender", label: "Gender", type: "select", options: ["Select", "Male", "Female", "Other"] },
    { name: "dob", label: "Date of Birth", type: "date" },
    { name: "height", label: "Height", type: "height" },
    { name: "weight", label: "Weight", type: "weight" },
]




/***************Preference Lead Management*********************/

export const initialPreferenceForm = {
    activityLevel: "Very Active",
    wellnessGoals: "Lose Weight",
    fitnessFocus: "Gym Workout",
    gymTime: "Morning",
    intensity: "Light",
    medicalConcerns: "Diabetes",
    experience: "Yes",
};

export const preferenceFormFields = [
    {
        name: "activityLevel",
        label: "Activity Level",
        options: ["Sedentary", "Lightly Active", "Moderately Active", "Very Active"],
    },
    {
        name: "wellnessGoals",
        label: "Wellness Goals",
        options: ["Lose Weight", "Gain Weight", "Build Muscle", "Modify My Diet", "Manage Stress", "Improve Step Count"],
    },
    {
        name: "fitnessFocus",
        label: "Primary Fitness Focus",
        options: ["Gym Workout", "Yoga", "Meditation", "Nutrition", "Recovery", "Cardio", "CrossFit"],
    },
    {
        name: "gymTime",
        label: "Preferred Gym Time",
        options: ["Morning", "Afternoon", "Evening", "Late Evening"],
    },
    {
        name: "intensity",
        label: "Preferred Workout Intensity",
        options: ["Light", "Moderate", "High"],
    },
    {
        name: "medicalConcerns",
        label: "Medical Concerns",
        options: ["Diabetes", "Hypertension", "Asthama", "Back Pain", "None"],
    },
    {
        name: "experience",
        label: "Previous Gym Experience",
        options: ["Yes", "No"],
    },
];


/***************Status Lead Management*********************/

export const initialStatusForm = {
    inquiryDate: "",
    assignedTo: "",
    interestLevel: "",
    followUpStatus: "",
    preferredPackage: "",
    preferredPTPackage: "",
    heardAbout: "",
    notes: [{ date: "", text: "" }],
}

export const statusFormFields = [
    {
        name: "inquiryDate",
        label: "Inquiry Date",
        type: "date",
    },
    {
        name: "assignedTo",
        label: "Assigned To Admin/Receptionist",
        type: "select",
        options: ["Ram Mohan", "Amit Sharma"],
    },
    {
        name: "interestLevel",
        label: "Interest Level",
        type: "select",
        options: ["Hot", "Warm", "Cold"],
    },
    {
        name: "followUpStatus",
        label: "Follow Up Status",
        type: "select",
        options: ["New Ennquiry", "Needs Follow Up", "Engaged", "Converted", "Archived"],
    },
    {
        name: "preferredPackage",
        label: "Preferred Package",
        type: "select",
        options: ["Monthly", "Quarterly", "Yearly"],
    },
    {
        name: "preferredPTPackage",
        label: "Preferred PT Package (If Any)",
        type: "select",
        options: ["10 Sessions", "20 Sessions"],
    },
    {
        name: "heardAbout",
        label: "How They Heard About The Gym",
        type: "select",
        options: ["Social Media", "Word Of Mouth", "Walk In", "WellVantage B2C App"],
    },
];
