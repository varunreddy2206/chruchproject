"use client";

import { useState } from "react";

export default function MembersPage() {
  const members = [
    { id: 1, name: "John", ward: "Ward 1" },
    { id: 2, name: "Mary", ward: "Ward 2" },
    { id: 3, name: "David", ward: "Ward 5" },
    { id: 4, name: "Grace", ward: "Ward 3" },
    { id: 5, name: "Paul", ward: "Ward 5" },
    { id: 6, name: "Peter", ward: "Ward 7" },
    { id: 7, name: "Susan", ward: "Ward 4" },
  ];

  const [selectedWard, setSelectedWard] = useState("All");

  const filteredMembers =
    selectedWard === "All"
      ? members
      : members.filter((m) => m.ward === selectedWard);

  const wards = [
    "All",
    "Ward 1",
    "Ward 2",
    "Ward 3",
    "Ward 4",
    "Ward 5",
    "Ward 6",
    "Ward 7",
  ];

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
              <th className="border border-gray-300 px-4 py-4">
                Name of Members
              </th>
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
                  No members found for {selectedWard}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Subtle Animation Effect on Mount */}
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
