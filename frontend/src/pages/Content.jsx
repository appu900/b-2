import axios from "axios";
import React, { useState } from "react";

const Content = () => {

  const[title,setTitle] = useState('');
  const[desc,setDesc] = useState('');
  const[image,setImage] = useState('');
  console.log(image)

  const handleChange = (e) =>{
    setTitle(e.target.value)
  }

  const handleChangeDesc = (e) =>{
    setDesc(e.target.value)
  }

  const onCretePost = async () =>{
    console.log(title,desc,image);
    const formData = new FormData();
    formData.append('title',title)
    formData.append('desc',desc)
    formData.append('image',image)
    await axios.post('http://localhost:8000/api/service',formData);
    setTitle('');
    setDesc('');
    setImage('');
    alert("done")
    console.log("data uploded sucessfully")
     
  }


  return <div>

    <div className="w-full h-screen flex justify-center items-center text-left">

      <div  className="flex flex-col gap-6 w-[400px] ">
        <p className="text-xl font-semibold text-left ">Create a Post !</p>
        <div>
           <p className="text-xl font-semibold text-left">whats the topic name ?</p>
           <input type="text" 
           value={title}
           onChange={handleChange}
           className="border-2 mt-5 border-black outline-none w-full p-3 active:border active:border-indigo-600 "
           />

        </div>

        <div>
           <p className="text-xl font-semibold text-left"> Enter description !</p>
           <textarea name="" id="" cols="30" rows="10"
           value={desc}
           onChange={handleChangeDesc}
           className="outline-none border border-black w-full mt-5"
           ></textarea>

        </div>

        <div>
           <p className="text-xl font-semibold text-left"> upload Image !</p>
           <input type="file"
           onChange={e=>setImage(e.target.files[0])}
           className=" mt-5"
           />

        </div>


        <div>
          <button
          onClick={onCretePost}
          className="w-full p-3 bg-black text-white active:bg-gray-600">Create a post</button>
        </div>


      </div>
    </div>
  </div>;
};

export default Content;
