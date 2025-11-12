"use client";
import React from "react";

export default function ChurchTimings() {
  const today = new Date().toLocaleString("en-us", { weekday: "long" });

  const schedule = [
    {
      activity: "Morning Prayer",
      timings: {
        Monday: "6:00am - 7:00am",
        Tuesday: "5:00am - 9:00am",
        Wednesday: "6:00am - 7:00am",
        Thursday: "6:00am - 7:00am",
        Friday: "6:00am - 7:00am",
        Saturday: "7:00am - 8:00am",
        Sunday: "6:30am - 8:30am",
      },
    },
    {
      activity: "Evening Prayer",
      timings: {
        Monday: "6:00pm - 7:30pm",
        Tuesday: "6:00pm - 7:30pm",
        Wednesday: "6:00pm - 7:30pm",
        Thursday: "6:00pm - 7:30pm",
        Friday: "6:00pm - 8:00pm",
        Saturday: "6:00pm - 8:00pm",
        Sunday: "6:00pm - 8:30pm",
      },
    },
    {
      activity: "Counseling",
      timings: {
        Monday: "-",
        Tuesday: "10:00am - 1:00pm",
        Wednesday: "-",
        Thursday: "10:00am - 1:00pm",
        Friday: "-",
        Saturday: "10:00am - 12:00pm",
        Sunday: "-",
      },
    },
    // ✅ Removed Food Donation
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <section className="w-full p-6 md:p-10 bg-[#FFFFFF]">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-8 text-[#022147] uppercase tracking-wide">
        Church Weekly Timings
      </h2>

      {/* ====== Table View (Desktop) ====== */}
      <div
        className="hidden md:block overflow-x-auto shadow-md rounded-2xl border border-[#F74F22]/40 
        transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl no-scrollbar"
      >
        <table className="min-w-full border-collapse text-center text-sm md:text-base">
          <thead className="bg-[#022147] text-[#FFFFFF]">
            <tr>
              <th className="px-4 py-3 border border-[#F74F22]/40 font-semibold">
                Activity / Day
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className={`px-4 py-3 border border-[#F74F22]/40 font-semibold transition-all duration-300 ${
                    today === day ? "bg-[#F74F22] text-white rounded-t-md shadow-md" : ""
                  }`}
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {schedule.map((row, index) => (
              <tr
                key={index}
                className="even:bg-[#fff9f7] odd:bg-[#FFFFFF] hover:bg-[#F74F22]/10 transition-all duration-300"
              >
                <td className="px-4 py-3 border border-[#F74F22]/40 font-semibold text-[#F74F22]">
                  {row.activity}
                </td>
                {days.map((day) => (
                  <td
                    key={day}
                    className={`px-4 py-3 border border-[#F74F22]/40 transition-transform duration-300 ${
                      today === day
                        ? "bg-[#F74F22]/20 text-[#022147] font-bold border-2 border-[#F74F22] shadow-md scale-105"
                        : "hover:scale-105"
                    }`}
                  >
                    {row.timings[day] || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ====== Card View (Mobile) ====== */}
      <div className="md:hidden space-y-6 mt-4">
        {days.map((day) => (
          <div
            key={day}
            className={`rounded-2xl p-5 border border-[#F74F22]/40 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
              today === day ? "bg-[#F74F22]/10 border-2 border-[#F74F22] shadow-md" : "bg-white"
            }`}
          >
            <h3
              className={`text-xl font-bold mb-3 ${
                today === day ? "text-[#F74F22]" : "text-[#022147]"
              }`}
            >
              {day}
            </h3>
            <ul className="space-y-2">
              {schedule.map((row, i) => (
                <li key={i} className="flex justify-between border-b border-[#F74F22]/20 pb-1">
                  <span className="font-semibold text-[#F74F22]">{row.activity}</span>
                  <span className="text-[#022147]">{row.timings[day]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
