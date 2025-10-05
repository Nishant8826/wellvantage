import { theme } from "@/config/config";
import { preferenceFormFields } from "@/config/formsField";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const Preferences = ({ formData, onChange }) => {
    if (!formData) return <p>No lead selected</p>;

    return (
        <>
            <h1 className="font-semibold text-xl my-4">Preferences</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {preferenceFormFields.map((field) => (
                    <div key={field.name}>
                        <label className="block text-sm font-medium mb-2 py-3" style={{ color: theme.inputLabelColor }}>
                            {field.label}
                        </label>
                        <Select value={formData?.[field.name] || ""} onValueChange={(val) => onChange(field.name, val)} >
                            <SelectTrigger className="border rounded-md w-full p-3 text-sm" style={{ borderColor: theme.inputBorderColor, color: theme.inputLabelColor }}>
                                <SelectValue placeholder={`Select ${field.label}`} />
                            </SelectTrigger>
                            <SelectContent className="z-50 bg-white">
                                {field.options.map((option, idx) => (
                                    <SelectItem key={idx} value={option}>
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Preferences;
