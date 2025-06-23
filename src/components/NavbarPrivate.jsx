"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SearchIcon,
  MenuIcon,
  XIcon,
  UserIcon,
  SettingsIcon,
  LogOutIcon,
} from "./icons";

// 🟡 Accept searchQuery and setSearchQuery as props
const NavbarPrivate = ({ onBrowseClick, searchQuery, setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const navigationLinks = [
    { name: "Browse", onClick: onBrowseClick },
    { name: "Post Skill", href: "/post-skill" },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 fixed top-0 left-0 w-full z-50 text-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 text-2xl font-bold">
          <span className="text-pink-500 text-3xl">🌟</span>
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-lg">
            SkillSwap
          </span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex w-full max-w-xl mx-6 relative">
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
            <SearchIcon />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills like 'guitar lessons', 'web design'..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 text-base"
          />
        </div>

        {/* Nav Links + Avatar */}
        <div className="hidden md:flex items-center space-x-6">
          {navigationLinks.map((link) =>
            link.onClick ? (
              <button
                key={link.name}
                onClick={link.onClick}
                className="hover:text-pink-500"
              >
                {link.name}
              </button>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-pink-500"
              >
                {link.name}
              </a>
            )
          )}

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="avatar"
                className="h-9 w-9 rounded-full border"
              />
              <span className="hidden lg:block">Alex Johnson</span>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded p-2 text-sm z-50">
                <a
                  href="/edit-profile"
                  className="flex items-center gap-2 py-2 px-3 hover:bg-gray-100 rounded"
                >
                  <UserIcon className="h-4 w-4" /> Edit Profile
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 py-2 px-3 hover:bg-gray-100 rounded"
                >
                  <SettingsIcon className="h-4 w-4" /> Settings
                </a>
                <button
                  onClick={() => navigate("/login")}
                  className="flex items-center gap-2 py-2 px-3 text-red-600 hover:bg-gray-100 rounded w-full text-left"
                >
                  <LogOutIcon className="h-4 w-4" /> Log Out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            {/* Search */}
            <div className="relative">
              <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 text-base"
              />
            </div>

            {/* Navigation */}
            {navigationLinks.map((link) =>
              link.onClick ? (
                <button
                  key={link.name}
                  onClick={link.onClick}
                  className="hover:text-pink-500 text-left"
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-pink-500"
                >
                  {link.name}
                </a>
              )
            )}

            {/* Mobile Profile Toggle */}
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="avatar"
                className="h-9 w-9 rounded-full border"
              />
              <span>Alex Johnson</span>
            </button>

            {isProfileOpen && (
              <div className="mt-2 w-full bg-white shadow-md rounded p-2 text-sm">
                <a
                  href="#"
                  className="flex items-center gap-2 py-2 px-3 hover:bg-gray-100 rounded"
                >
                  <UserIcon className="h-4 w-4" /> Edit Profile
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 py-2 px-3 hover:bg-gray-100 rounded"
                >
                  <SettingsIcon className="h-4 w-4" /> Settings
                </a>
                <button
                  onClick={() => navigate("/login")}
                  className="flex items-center gap-2 py-2 px-3 text-red-600 hover:bg-gray-100 rounded w-full text-left"
                >
                  <LogOutIcon className="h-4 w-4" /> Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarPrivate;
