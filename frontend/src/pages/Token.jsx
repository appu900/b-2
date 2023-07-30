import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Token = () => {
  const navigate = useNavigate();
  const[token,tokenData] = useState({
    code:"",
  })
  const onProceed =async () => {
    
     try {
      await axios.post('http://localhost:8000/api/service',token);
      console.log("access is on")
      navigate("/content");
      
     } catch (error) {
        alert(error.message)
      
     }
  };
 

  return (
    <div className="flex w-full h-screen justify-center items-center ">
      <div className="flex flex-col items-center gap-4 text-[17px] font-semibold ">
        <p className="w-[300px] text-left">Enter authorizationCode (for now its 778899 )</p>
        <input
          type="text"
          value={token.code}
          onChange={(e)=>tokenData({...token,code:e.target.value})}
          className="border-2 border-black outline-none w-[300px] p-3 active:border active:border-indigo-600 "
        />
        <div>
          <button
            onClick={onProceed}
            className="w-[300px] p-2 bg-black text-white active:bg-gray-600"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Token;
