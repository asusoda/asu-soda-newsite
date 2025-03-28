import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button"; // Keep Button import for potential future use or consistency

interface PointsDetails {
  awarded_by: string;
  event: string;
  points: number;
  timestamp: string;
}

interface LeaderboardEntry {
  name: string;
  points_details: PointsDetails[];
  total_points: number;
}

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; data: PointsDetails[]; name: string }> = ({ isOpen, onClose, data, name }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-neutral-900 p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto text-white">
        <h2 className="text-2xl font-bold mb-4">Points Breakdown for {name}</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-800">
                <th className="p-2 text-left">Event</th>
                <th className="p-2 text-left">Points</th>
                <th className="p-2 text-left">Awarded By</th>
                <th className="p-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((detail, index) => (
                <tr key={index} className="border-b border-neutral-700">
                  <td className="p-2">{detail.event}</td>
                  <td className="p-2">{detail.points}</td>
                  <td className="p-2">{detail.awarded_by}</td>
                  <td className="p-2">{new Date(detail.timestamp).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Updated Modal Close Button Hover Styling */}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 rounded bg-neutral-800 text-white hover:bg-neutral-600 transition-colors" // Changed hover to bg-neutral-600
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Leaderboard: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<LeaderboardEntry | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.thesoda.io/leaderboard');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: LeaderboardEntry[] = await response.json();
        setLeaderboardData(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = leaderboardData.filter((entry) =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto p-4 sm:p-6 my-8 sm:my-16 md:my-24 lg:my-36 shadow-md rounded-lg bg-neutral-900 text-white">
      <Helmet>
        <title>Leaderboard - ASU Soda</title>
        <meta name="description" content="Check out the top performers in ASU Soda's leaderboard and see who's leading the rankings!" />
        <meta name="keywords" content="leaderboard, asu soda, asu, software developers association, arizona state university, benifits, computer science" />
      </Helmet>

      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Leaderboard</h1>

      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 w-full">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-neutral-700 bg-neutral-800 p-2 rounded w-full sm:w-64 text-white placeholder-neutral-400"
        />
      </div>

      <div className="w-full overflow-x-auto">
        <table className="table-auto border-collapse border border-neutral-600 w-full text-center">
          <thead>
            <tr className="bg-neutral-800">
              <th className="border border-neutral-600 py-2 px-4 text-base sm:text-lg font-semibold text-center">Name</th>
              <th className="border border-neutral-600 py-2 px-4 text-base sm:text-lg font-semibold text-center">Points Earned</th>
              <th className="border border-neutral-600 py-2 px-4 text-base sm:text-lg font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((entry, index) => (
              <tr key={index}>
                <td className="border border-neutral-600 py-2 px-4 text-center">{entry.name}</td>
                <td className="border border-neutral-600 py-2 px-4 text-center">{entry.total_points}</td>
                <td className="border border-neutral-600 py-2 px-4 text-center">
                  {/* View Details Button Styling (hover:bg-neutral-700) */}
                  <button
                    onClick={() => { setSelectedEntry(entry); setModalOpen(true); }}
                    className="px-4 py-2 rounded bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 space-y-4 sm:space-y-0">
        {/* Updated Previous Button Hover Styling */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="w-full sm:w-auto px-4 py-2 rounded bg-neutral-800 text-white hover:bg-neutral-600 transition-colors disabled:bg-neutral-600 disabled:text-neutral-400 disabled:cursor-not-allowed" // Changed hover to bg-neutral-600
        >
          Previous
        </button>
        <span className="text-base sm:text-lg">Page {currentPage} of {totalPages}</span>
        {/* Updated Next Button Hover Styling */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="w-full sm:w-auto px-4 py-2 rounded bg-neutral-800 text-white hover:bg-neutral-600 transition-colors disabled:bg-neutral-600 disabled:text-neutral-400 disabled:cursor-not-allowed" // Changed hover to bg-neutral-600
        >
          Next
        </button>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setSelectedEntry(null); }}
        data={selectedEntry?.points_details || []}
        name={selectedEntry?.name || ''}
      />
    </div>
  );
};

export default Leaderboard;
