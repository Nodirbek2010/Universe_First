import React from 'react';
import { useGetProductsQuery } from '../../Redux/slice/Product/slice';
import { useGetCatigoriesQuery } from '../../Redux/slice/Categories/slice';
import { Link } from 'react-router-dom';
const Youtube = () => {
  const { data } = useGetProductsQuery();
  const {data:date}=useGetCatigoriesQuery()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {data?.map((value) => (
          date?.map((valuu)=>(

            <div key={value.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-40 bg-gray-200">
              <Link to ={`/${value?.id}`}>
                <img className="w-full h-full object-cover" src={value?.image} alt={value?.title} />
                </Link>
              </div>
              <div className="p-4">
                <h4 className="text-xs font-semibold">{value?.title}</h4>
                <p className="text-gray-600">{valuu?.title}</p>
                <p className="text-red-600">Views:{value?.id} • Date:{value?.created_date}</p>
              </div>
            </div>
           
          </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default Youtube;
