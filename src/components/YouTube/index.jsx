import React from 'react';

const Youtube = () => {
  return (
    <div className="flex flex-wrap">
      {/* Video Preview Cards */}
      {[...Array(10)].map((_, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-gray-200 h-40"></div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">Video Title {index + 1}</h2>
              <p className="text-gray-600">Channel Name</p>
              <p className="text-red-600">Views • Time Ago</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Youtube;
