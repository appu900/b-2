import React from "react";

const Blogcard = ({ title, desc, imageurl }) => {
  return (
    <div className="w-full h-[600px]  mt-10 px-3 py-2 bg-[#F5F5F5] rounded-sm shadow-xl border-red">
      

      <div> 
        <p className="text-2xl text-[#FF0060]  text-left font-semibold ">{title}</p>
      </div>
      <div className='mt-5'>
          <img src={imageurl} alt="" className='w-full h-[400px] rounded-md' />
        </div>

        <div className="text-left mt-4 text-[#0C134F] text-[15px] font-semibold tracking-wide p-2">
            <p>{desc}</p>
        </div>
    </div>
  );
};

export default Blogcard;


// 18191a