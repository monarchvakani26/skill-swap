"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarPrivate from "../components/NavbarPrivate";

const EditProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "Monarch",
    bio: "Passionate coder & lifelong learner.",
    avatar: "/placeholder.svg",
    skills: ["React", "Guitar", "Python"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData((prev) => ({ ...prev, skills: updatedSkills }));
  };

  const addSkill = () => {
    setFormData((prev) => ({ ...prev, skills: [...prev.skills, ""] }));
  };

  const removeSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, skills: updatedSkills }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    // 🔒 Later send data to backend via Axios
    navigate("/dashboard");
  };

  return (
    <>
      <NavbarPrivate />
      <div className="max-w-3xl mx-auto mt-24 p-6 bg-white shadow-md rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded-md px-4 py-2"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Bio</label>
            <textarea
              name="bio"
              className="w-full border rounded-md px-4 py-2"
              value={formData.bio}
              onChange={handleChange}
              rows={3}
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">Avatar URL</label>
            <input
              type="text"
              name="avatar"
              className="w-full border rounded-md px-4 py-2"
              value={formData.avatar}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-medium mb-1 mb-2">Skills</label>
            {formData.skills.map((skill, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  className="w-full border rounded-md px-4 py-2"
                />
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addSkill}
              className="text-pink-500 hover:underline text-sm"
            >
              + Add Another Skill
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
