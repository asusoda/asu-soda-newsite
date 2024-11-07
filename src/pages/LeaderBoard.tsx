import React, { useEffect, useState } from 'react';

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

const Leaderboard: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

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
        setError(error.message);
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
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page on items per page change
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  if (loading) return <div className="flex justify-center items-center h-screen text-lg">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-lg text-red-500">Error: {error}</div>;

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>

      {/* Search and Items Per Page Selector */}
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 p-2 rounded w-64"
        />
        <div className="flex items-center">
          <label htmlFor="itemsPerPage" className="mr-2 font-medium">Show:</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border border-gray-300 p-2 rounded"
          > 
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={filteredData.length}>All</option>
          </select>
          <span className="ml-2">entries per page</span>
        </div>
      </div>

      {/* Leaderboard Table */}
      <table className="table-auto border-collapse border border-gray-300 w-2/4 text-center">
        <thead>
          <tr className="bg-gray-200 ">
            <th className="border border-gray-300 py-2 px-4 text-lg font-semibold text-center">Name</th>
            <th className="border border-gray-300 py-2 px-4 text-lg font-semibold text-center">Points Earned</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((entry, index) => (
            <tr key={index} className="hover:bg-gray-100 hover:text-black">
              <td className="border border-gray-300 py-2 px-4 text-center">{entry.name}</td>
              <td className="border border-gray-300 py-2 px-4 text-center">{entry.total_points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center w-3/4 mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded disabled:opacity-50 bg-[rgb(202_35_82_/_var(--tw-bg-opacity))] text-white"
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded disabled:opacity-50 bg-[rgb(202_35_82_/_var(--tw-bg-opacity))] text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
