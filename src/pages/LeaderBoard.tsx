import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

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
      <div className="bg-gray-900 p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto text-white">
        <h2 className="text-2xl font-bold mb-4">Points Breakdown for {name}</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-2 text-left">Event</th>
                <th className="p-2 text-left">Points</th>
                <th className="p-2 text-left">Awarded By</th>
                <th className="p-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((detail, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="p-2">{detail.event}</td>
                  <td className="p-2">{detail.points}</td>
                  <td className="p-2">{detail.awarded_by}</td>
                  <td className="p-2">{new Date(detail.timestamp).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button 
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-[rgb(202_35_82_/_var(--tw-bg-opacity))] text-white rounded hover:bg-opacity-80"
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
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto p-4 sm:p-6 my-8 sm:my-16 md:my-24 lg:my-36 shadow-md rounded-lg">
      {/* Helmet for SEO */}
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
          className="border border-gray-300 p-2 rounded w-full sm:w-64"
        />
      </div>

      <div className="w-full overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 py-2 px-4 text-base sm:text-lg font-semibold text-center">Name</th>
              <th className="border border-gray-300 py-2 px-4 text-base sm:text-lg font-semibold text-center">Points Earned</th>
              <th className="border border-gray-300 py-2 px-4 text-base sm:text-lg font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((entry, index) => (
              <tr key={index} className="hover:bg-gray-100 hover:text-black">
                <td className="border border-gray-300 py-2 px-4 text-center">{entry.name}</td>
                <td className="border border-gray-300 py-2 px-4 text-center">{entry.total_points}</td>
                <td className="border border-gray-300 py-2 px-4 text-center">
                  <button 
                    onClick={() => { setSelectedEntry(entry); setModalOpen(true); }}
                    className="px-3 py-1 bg-[rgb(202_35_82_/_var(--tw-bg-opacity))] text-white rounded hover:bg-opacity-80"
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
        <button onClick={handlePrevious} disabled={currentPage === 1} className="px-4 py-2 rounded disabled:opacity-50 bg-[rgb(202_35_82_/_var(--tw-bg-opacity))] text-white w-full sm:w-auto">
          Previous
        </button>
        <span className="text-base sm:text-lg">Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages} className="px-4 py-2 rounded disabled:opacity-50 bg-[rgb(202_35_82_/_var(--tw-bg-opacity))] text-white w-full sm:w-auto">
          Next
        </button>
      </div>

      {/* Modal */}
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
