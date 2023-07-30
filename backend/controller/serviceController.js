const { request } = require('express');
const Content = require('../modals/contentModal')
const multer = require('multer')
const upload = multer({ dest: "uploads/" });


exports.uploadDataToDatabase = async(request,response)=>{

    console.log(request.body);
    console.log(request.file)

    try {

    const title = request.body.title;
    const description = request.body.desc;
    const imageUrl = request.file.path
    if(!title || !description || !imageUrl){
        return response.json({code:400,message:"bad request"})
    }

    const content = new Content({
        title:title,
        description:description,
        imgUrl:imageUrl

    })

    const sucess = await content.save();
    if(sucess){
        return response.status(200).json({message:"data uploded sucessfully"})
    }
    else{
        return response.status(500).json({message:"service error"})
    }

        
    } catch (error) {

        response.status(400).json({error:error.message})
        
    }
    

}


exports.getAllData = async(request,response) =>{

    const data = await Content.find({});
    console.log(data)
    if(data){
        response.json(data).status(200)
    }
    else{
        response.json({error:"service error"}).status(400)
    }
}