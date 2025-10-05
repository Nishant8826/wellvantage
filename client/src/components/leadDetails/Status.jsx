import { theme } from "@/config/config";
import { statusFormFields } from "@/config/formsField";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const Status = ({ formData, onChange }) => {
    if (!formData) return <p>No lead selected</p>;

    const notes = formData?.notes?.length ? formData.notes : [{ date: new Date().toISOString().split("T")[0], text: "Lead Created." }];

    const handleNoteChange = (index, field, value) => {
        const updatedNotes = [...notes];
        updatedNotes[index][field] = value;
        onChange("notes", updatedNotes);
    };

    const addNote = () => {
        onChange("notes", [...notes, { date: "", text: "" }]);
    };

    return (
        <>
            <h1 className="font-semibold text-xl my-4">Status</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {statusFormFields.map((field) => (
                    <div key={field.name} className={field.name === "heardAbout" ? "md:col-span-2" : ""}>
                        <label className="block text-sm font-medium mb-2 py-3" style={{ color: theme.inputLabelColor }}>
                            {field.label}
                        </label>

                        {field.type === "select" ? (
                            <Select value={formData[field.name] || ""} onValueChange={(val) => onChange(field.name, val)}>
                                <SelectTrigger className="w-full border rounded-md h-10" style={{ color: theme.inputLabelColor, borderColor: theme.inputBorderColor, }}>
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent className="z-50 bg-white">
                                    {field.options.map((opt, idx) => (
                                        <SelectItem key={idx} value={opt}>
                                            {opt}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        ) : (
                            <input type="date" name={field.name} value={formData[field.name] || ""} onChange={(e) => onChange(field.name, e.target.value)} className="border rounded-md w-full p-2" style={{ color: theme.inputLabelColor, borderColor: theme.inputBorderColor, }} />
                        )}
                    </div>
                ))}

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2" style={{ color: theme.inputLabelColor }} >
                        Custom Notes
                    </label>

                    {notes.map((note, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                            <input type="date" value={note.date} disabled={index === 0} onChange={(e) => handleNoteChange(index, "date", e.target.value)} className="border rounded-md p-2 w-1/3" style={{ color: theme.inputLabelColor, borderColor: theme.inputBorderColor, }} />
                            <input type="text" value={note.text} placeholder="Enter note" disabled={index === 0} onChange={(e) => handleNoteChange(index, "text", e.target.value)} className={`border rounded-md p-2 flex-1 ${index === 0 ? "bg-gray-200" : ""}`} style={{ color: theme.inputLabelColor, borderColor: theme.inputBorderColor, }} />
                        </div>
                    ))}

                    <button type="button" onClick={addNote} className="bg-green-500 text-white px-4 py-1 rounded-md mt-2">
                        + Add Note
                    </button>
                </div>
            </div>
        </>
    );
};

export default Status;
