import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../../Redux/slice/Product/slice";
import { Link } from "react-router-dom";

const IDPage = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://omofood.pythonanywhere.com/api/v1/products/${id}/?images=true`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res?.status === 200) {
          setData(res?.data);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));
  }, [id, token]);

  const { data: sidebarData } = useGetProductsQuery();

  return (
    <div className="flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4">
     
      <div className="flex-1">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div>
              <img src={data.image} alt={data.title} className="w-full h-auto rounded-lg" />
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-semibold">{data.title}</h1>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://via.placeholder.com/48"
                    alt="Channel Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h2 className="text-sm font-semibold">Channel Name</h2>
                    <p className="text-xs text-gray-500">1M subscribers</p>
                  </div>
                </div>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full">
                  Subscribe
                </button>
              </div>
              <div className="mt-4">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2">
                    <span>👍</span>
                    <span>1.2K</span>
                  </button>
                  <button className="flex items-center space-x-2">
                    <span>👎</span>
                    <span>23</span>
                  </button>
                  <button className="flex items-center space-x-2">
                    <span>🔗</span>
                    <span>Share</span>
                  </button>
                  <button className="flex items-center space-x-2">
                    <span>💾</span>
                    <span>Save</span>
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm">{data.description}</p>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Comments</h2>
                <div className="mt-2 space-y-4">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="flex space-x-4">
                      <img
                        src={`https://via.placeholder.com/48?text=A${index + 1}`}
                        alt={`Avatar ${index + 1}`}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="text-sm font-semibold">User {index + 1}</h3>
                        <p className="text-sm">
                          This is a comment from user {index + 1}. This is a sample comment to show how comments will look.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

   
      <div className="w-full lg:w-1/3 xl:w-1/4">
        <h2 className="text-xl font-bold mb-4">Up Next</h2>
        <div className="space-y-4">
          {sidebarData?.map((value) => (
            <div key={value.id} className="flex items-center space-x-4">
              <div className="w-1/3">
              <Link to ={`/${value?.id}`}>
                <img
                  src={value.image}
                  alt={`Thumbnail ${value.title}`}
                  className="w-full h-auto rounded-lg"
                />
                </Link>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold">{value.title}</h3>
                <p className="text-xs text-gray-500">Channel Name</p>
                <p className="text-xs text-gray-500">1M views • 1 day ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IDPage;
