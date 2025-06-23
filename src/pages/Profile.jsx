"use client";
import { useParams } from "react-router-dom";
import NavbarPrivate from "../components/NavbarPrivate";
import { StarIcon } from "../components/icons";

const Profile = () => {
  const { id } = useParams(); // Get user ID from route
  const dummyUser = {
    name: "Sarah Parker",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Full-stack developer and language enthusiast.",
    skills: [
      {
        id: 1,
        title: "JavaScript Masterclass",
        rating: 4.9,
        description: "Deep dive into JS concepts and frameworks.",
      },
      {
        id: 2,
        title: "Spanish Lessons",
        rating: 4.5,
        description: "Conversational Spanish for beginners.",
      },
    ],
  };

  return (
    <>
      <NavbarPrivate />
      <div className="max-w-4xl mx-auto p-6 mt-24 bg-white rounded-xl shadow-md">
        <div className="flex items-center gap-6">
          <img
            src={dummyUser.avatar}
            alt={dummyUser.name}
            className="h-20 w-20 rounded-full border"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{dummyUser.name}</h2>
            <p className="text-gray-600">{dummyUser.bio}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">Offered Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dummyUser.skills.map((skill) => (
              <div key={skill.id} className="border p-4 rounded-lg shadow-sm bg-gray-50">
                <h4 className="text-lg font-semibold text-gray-800">{skill.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{skill.description}</p>
                <div className="flex items-center text-yellow-500 mb-2">
                  <StarIcon className="h-5 w-5" /> <span className="ml-1">{skill.rating}</span>
                </div>
                <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
                  Request Swap
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
