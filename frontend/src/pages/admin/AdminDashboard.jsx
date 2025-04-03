import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getCountApi } from "../../api/adminApi";

const AdminDashboard = () => {

  const [fetchingData, setFetchingData] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountApi();
        setFetchingData(res.data);
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 ">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-6 rounded-lg shadow-md bg-color-yellow text-white">
          <h2 className="text-xl font-semibold font-epilogue mb-3">Users</h2>
          <p className="text-3xl text-color-lightgray">{fetchingData.totalUsers}</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-color-yellow text-white">
          <h2 className="text-xl font-semibold font-epilogue mb-3">Captains</h2>
          <p className="text-3xl text-color-lightgray">{fetchingData.totalCaptains}</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-color-yellow text-white">
          <h2 className="text-xl font-semibold font-epilogue mb-3">Total Revenue</h2>
          <p className="text-3xl text-color-lightgray">
            total revenue
            {/* ${totalRevenue.toLocaleString()} */}
          </p>
        </div>
      </div>
    </div>

  );
};

export default AdminDashboard;
