"use client"
import Related from "@/app/components/Related";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page({ params }) {
  const [data, setData] = useState(null)
  useEffect(() => {
    const FetchApi = async () => {
      const token = '5b82083b8d3eb5322b1d682474ba15e888b65625';
      const config = {
          headers: {
              'Authorization': `Token ${token}`
          }
      };
  
      try {
          const response = await axios.get('https://meggieapi.onrender.com/cateories/', config);
          setData(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }
    FetchApi()
  }, [])
  const detailProduct = data ? (data.find(detail => detail.name.split(' ').join('').toLowerCase() === params.odin)
  ):(<p>loading</p>)

  return (
    <div>
      <h2 className="text-[20px] text-pretty font-semibold text-gray-600 md:px-28 sm:px-4 px-28 pt-10">{detailProduct.name}</h2>
      {detailProduct.clothing_class && (
        <Related
          currentProductName={detailProduct.name}
          currentProductClasses={[detailProduct.clothing_class]}
        />
      )}
    </div>
  );
}
