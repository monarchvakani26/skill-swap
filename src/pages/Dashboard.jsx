"use client";
import React from "react";
import NavbarPrivate from "../components/NavbarPrivate";
import { BellIcon, MessageIcon } from "../components/icons";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = "Monarch"; // Later fetch dynamically

  const mySkills = [
    { id: 1, title: "UI/UX Design", swaps: 2 },
    { id: 2, title: "Python Basics", swaps: 5 },
  ];

  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      skill: "Guitar Lessons",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Sara Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      skill: "Web Development",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Dev Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      skill: "Photography",
      rating: 4.9,
    },
  ];

  return (
    <>
      <NavbarPrivate />

      <div className="min-h-screen bg-gray-100 p-6 pt-24">
        {/* Notification and Chat Icons */}
        <div className="flex justify-end space-x-4 mb-6 mr-2">
          <button className="relative text-gray-600 hover:text-pink-500">
            <BellIcon className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">2</span>
          </button>
          <button className="relative text-gray-600 hover:text-pink-500">
            <MessageIcon className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">4</span>
          </button>
        </div>

        {/* Welcome + My Skills Section */}
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome, {userName}! 👋</h1>

        <div className="bg-white shadow-md rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">Your Posted Skills</h2>
          {mySkills.length === 0 ? (
            <p className="text-gray-600">You haven't posted any skills yet.</p>
          ) : (
            <ul className="space-y-4">
              {mySkills.map((skill) => (
                <li key={skill.id} className="border-b pb-2">
                  <span className="font-medium">{skill.title}</span> — {skill.swaps} swap requests
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 mb-10">
          + Post New Skill
        </button>

        {/* People Skill Cards Section */}
        <h2 className="text-2xl font-semibold mb-6 text-purple-600">People Offering Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="bg-white rounded-xl shadow-md p-5">
              <div className="flex items-center mb-4">
                <img src={user.avatar} alt={user.name} className="h-12 w-12 rounded-full border mr-4" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                  <p className="text-gray-500 text-sm">{user.skill}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-medium">⭐ {user.rating}</span>
                <button
                  onClick={() => navigate(`/profile/${user.id}`)}
                  className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 text-sm"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
