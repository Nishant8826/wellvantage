import { theme } from "@/config/config";
import { basicFormFields } from "@/config/formsField";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const Basic = ({ formData, onChange }) => {
    if (!formData) return <p>No lead selected</p>;

    const renderField = (field) => {
        const value = formData?.[field.name] || "";

        switch (field.type) {
            case "select":
                return (
                    <Select value={value} onValueChange={(val) => onChange(field.name, val)}>
                        <SelectTrigger className="w-full border rounded-md p-2" style={{ borderColor: theme.inputBorderColor, color: theme.inputLabelColor }} >
                            <SelectValue placeholder={`Select ${field.label}`} />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            {field.options.map((opt, idx) => (
                                <SelectItem key={idx} value={opt}>
                                    {opt}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                );

            case "text":
            case "email":
            case "date":
                return (
                    <input type={field.type} name={field.name} value={value} onChange={(e) => onChange(field.name, e.target.value)} placeholder={field.placeholder} className="w-full border rounded-md p-2" style={{ color: theme.inputLabelColor, borderColor: theme.inputBorderColor }} />
                );

            case "height":
            case "weight":
                return (
                    <div className="flex items-center">
                        <input type="number" name={field.name} value={value} onChange={(e) => onChange(field.name, e.target.value)} placeholder={`Enter ${field.label.toLowerCase()}`} className="w-full border rounded-md p-2"
                            style={{ color: theme.inputLabelColor, borderColor: theme.inputBorderColor }} />
                        <span className="ml-2 text-sm text-gray-600">
                            {field.name === "height" ? "cm" : "kg"}
                        </span>
                    </div>
                );

            case "phone":
                return (
                    <div className="flex">
                        <Select value={formData?.phoneCode || "+91"} onValueChange={(val) => onChange("phoneCode", val)}>
                            <SelectTrigger className="border rounded-l-md p-2 h-10 w-[90px] bg-white" style={{ borderColor: theme.inputBorderColor, color: theme.inputLabelColor }} >
                                <SelectValue placeholder="+91" />
                            </SelectTrigger>
                            <SelectContent className="z-50 bg-white">
                                <SelectItem value="+91">+91</SelectItem>
                                <SelectItem value="+1">+1</SelectItem>
                                <SelectItem value="+44">+44</SelectItem>
                            </SelectContent>
                        </Select>
                        <input type="text" name="phone" value={formData?.phone || ""} onChange={(e) => onChange("phone", e.target.value)} placeholder="Phone number" className="flex-1 border rounded-r-md p-2" style={{ color: theme.inputLabelColor, borderColor: theme.inputBorderColor }} />
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <p className="font-semibold text-xl my-4">Basic Details</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {basicFormFields.map((field) => (
                    <div key={field.name}>
                        <label
                            className="block text-sm font-medium mb-2 py-3"
                            style={{ color: theme.inputLabelColor }}
                        >
                            {field.label}
                        </label>
                        {renderField(field)}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Basic;
