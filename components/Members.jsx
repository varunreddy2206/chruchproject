"use client";

import { useState } from "react";

export default function MembersPage() {
  // Generate 200 realistic names
  const names = [
    "John", "Mary", "David", "Grace", "Paul", "Peter", "Susan", "James", "Emily", "Michael",
    "Sarah", "Daniel", "Rachel", "Andrew", "Sophia", "Mark", "Emma", "Joseph", "Olivia", "Samuel",
    "Hannah", "Joshua", "Lily", "Benjamin", "Ava", "Ethan", "Mia", "Jacob", "Ella", "Lucas",
    "Chloe", "Matthew", "Isabella", "Noah", "Amelia", "Nathan", "Charlotte", "Elijah", "Abigail",
    "Caleb", "Grace", "Logan", "Sophie", "Henry", "Victoria", "Leo", "Scarlett", "Owen", "Layla",
    "Isaac", "Zoe", "Eli", "Aria", "Adam", "Nora", "Jack", "Lillian", "Ryan", "Harper",
    "Evan", "Ellie", "Jonathan", "Bella", "Aaron", "Madison", "Charles", "Avery", "Mason", "Evelyn",
    "Liam", "Luna", "Gabriel", "Riley", "Oliver", "Leah", "Jayden", "Hazel", "Carter", "Penelope",
    "Wyatt", "Camila", "Hunter", "Stella", "Dylan", "Violet", "Isaiah", "Aurora", "Luke", "Paisley",
    "Anthony", "Hannah", "Jason", "Savannah", "Alexander", "Addison", "Thomas", "Skylar", "Sebastian", "Nova",
    "Christian", "Lucy", "Dominic", "Aubrey", "Austin", "Elena", "Brandon", "Anna", "Adrian", "Sadie",
    "Jordan", "Eva", "Tyler", "Clara", "Nathaniel", "Alice", "Cole", "Ruby", "Blake", "Willow",
    "Eric", "Naomi", "Xavier", "Lydia", "Justin", "Caroline", "Levi", "Peyton", "Gavin", "Eleanor",
    "Connor", "Hailey", "Julian", "Samantha", "Cameron", "Aaliyah", "Zachary", "Maya", "Ian", "Kennedy",
    "Miles", "Genesis", "Elias", "Faith", "Vincent", "Alexis", "Asher", "Neha", "Nikhil", "Arjun",
    "Priya", "Ananya", "Aarav", "Riya", "Krishna", "Diya", "Ishaan", "Meera", "Rohan", "Sneha",
    "Aditya", "Kavya", "Sai", "Anjali", "Manish", "Pooja", "Raj", "Divya", "Vikram", "Neel",
    "Kiran", "Isha", "Tarun", "Preeti", "Aravind", "Swathi", "Naveen", "Lakshmi", "Akash", "Rachana",
    "Tejas", "Bhavya", "Vikas", "Keerthi", "Harsha", "Chaitra", "Rohit", "Varsha", "Santosh", "Sindhu",
    "Karthik", "Deepa", "Venu", "Mounika", "Suraj", "Aarthi", "Rajesh", "Tulasi", "Mahesh", "Lohita"
  ];

  // Shuffle names randomly
  const shuffledNames = [...names].sort(() => Math.random() - 0.5);

  // Create 200 members and assign random ward (1–7)
  const members = Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    name: shuffledNames[i % shuffledNames.length],
    ward: (Math.floor(Math.random() * 7) + 1).toString(), // just number (1-7)
  }));

  const [selectedWard, setSelectedWard] = useState("All");

  // Filter logic
  const filteredMembers =
    selectedWard === "All"
      ? members
      : members.filter((m) => m.ward === selectedWard);

  const wards = ["All", "1", "2", "3", "4", "5", "6", "7"];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f9f9f9] flex flex-col items-center py-10 px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#022147] mb-8 text-center tracking-wide">
        Members
      </h1>

      {/* Table Container */}
      <div className="relative overflow-x-auto w-full max-w-5xl rounded-2xl shadow-[0_0_30px_rgba(2,33,71,0.1)] bg-white border border-gray-200 transition-all duration-300 hover:shadow-[0_0_50px_rgba(2,33,71,0.2)] hover:scale-[1.01]">
        <table className="w-full text-center border-collapse overflow-hidden rounded-lg">
          {/* Table Header */}
          <thead className="bg-[#022147] text-white text-sm md:text-base uppercase tracking-wide">
            <tr>
              <th className="border border-gray-300 px-4 py-4 w-[80px]">S.No</th>
              <th className="border border-gray-300 px-4 py-4">Name of Members</th>
              <th className="border border-gray-300 px-4 py-4 relative">
                <div className="flex items-center justify-center space-x-2">
                  <span>Ward No</span>
                  <select
                    value={selectedWard}
                    onChange={(e) => setSelectedWard(e.target.value)}
                    className="text-[#022147] bg-white border border-gray-300 rounded-md px-2 py-1 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F74F22] transition-all duration-200 hover:shadow-md"
                  >
                    {wards.map((ward) => (
                      <option key={ward} value={ward}>
                        {ward}
                      </option>
                    ))}
                  </select>
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member, index) => (
                <tr
                  key={member.id}
                  className="group border-b border-gray-200 transition-all duration-300 hover:bg-[#F74F22]/10 hover:scale-[1.01] hover:shadow-[0_5px_20px_rgba(247,79,34,0.3)] hover:backdrop-blur-sm"
                >
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-[#022147] transition-all duration-300 group-hover:text-[#F74F22]">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-[#022147] transition-all duration-300 group-hover:text-[#F74F22]">
                    {member.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-[#022147] transition-all duration-300 group-hover:text-[#F74F22]">
                    {member.ward}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="py-8 text-gray-500 italic text-lg border border-gray-300"
                >
                  No members found for Ward {selectedWard}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Subtle Animation */}
      <style jsx>{`
        table {
          animation: fadeInUp 0.8s ease-in-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
