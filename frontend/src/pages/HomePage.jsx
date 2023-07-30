import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Blogcard from "./components/Blogcard";

const HomePage = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);

  async function fetchdata() {
    const response = await axios.get("http://localhost:8000/api/data");
    console.log(response.data);
    setBlogData(response.data)

  }
  useEffect(() => {
     fetchdata();
  }, []);
  return (
    <div className="h-auto ">
      <div className="w-full bg-white p-4 shadow-2xl text-black flex justify-between items-center sticky top-0">
        <div className="text-xl text-indigo-500 font-bold ml-10">
          <p>BLOGFY.IN</p>
        </div>

        <div className="flex gap-6 text-[18px] tracking-wider cursor-pointer text-indigo-600 font-semibold mr-10 border border-indigo-600  ">
          <p className="hover:border p-2" onClick={(e) => navigate("/admin")}>
            Admin section
          </p>
        </div>
      </div>

      <div className="md:px-[27%]">
        <p>
          {
            blogData.map((item)=>(

              <div>
                 <Blogcard
                  title={item.title}
                  desc={item.description}
                  imageurl={`http://localhost:8000/${item.imgUrl}`}
                 />
              </div>
             

            ))
          }
        </p>
      </div>
    </div>
  );
};

export default HomePage;


{/* <div>
<p>{item.title}</p>
<p>{item.description}</p>
<img src={`http://localhost:8000/${item.imgUrl}`} alt="" />
</div> */}
