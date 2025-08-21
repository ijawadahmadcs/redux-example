"use client";
import { useSelector, useDispatch } from "react-redux";
import { addReport, removeReport, clearReports } from "@/redux/slices/reportsSlice";
import { useState } from "react";

export default function ReportsPage() {
  const reports = useSelector((state) => state.reports.list);
  const dispatch = useDispatch();
  const [newReport, setNewReport] = useState("");

  const handleAddReport = () => {
    if (newReport.trim() !== "") {
      dispatch(addReport(newReport));
      setNewReport("");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reports</h1>

      {/* Add Report */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newReport}
          onChange={(e) => setNewReport(e.target.value)}
          placeholder="Enter report title"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleAddReport}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Reports List */}
      {reports.length === 0 ? (
        <p className="text-gray-500">No reports available.</p>
      ) : (
        <ul className="space-y-2">
          {reports.map((report, index) => (
            <li
              key={index}
              className="flex justify-between items-center border p-2 rounded"
            >
              <span>{report}</span>
              <button
                onClick={() => dispatch(removeReport(index))}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Clear All */}
      {reports.length > 0 && (
        <button
          onClick={() => dispatch(clearReports())}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
        >
          Clear All
        </button>
      )}
    </div>
  );
}
