import React, { useEffect, useState } from 'react'
const Task = () => {
//   const mehsull =[
//     'mehul1','mehusl2'
//   ]
//  const getMehsul  = ()=>{
//     mehsull.Math.floor(Math.random());
//  }
// //  console.log(getMehsul());

const [img, setimg] = useState("");
const [imgs, setimgs] = useState("")
const images = [];
const imeg = [];

images[0] = "/image/course-1-img.jpg";

images[1] = "https://www.computerhope.com/banners/banner2.gif";
images[2] = "https://www.computerhope.com/banners/banner3.gif";
images[3] = "image/slide-2.jpg" ;
//-------------------------------------------------
imeg [0] = "image/image-01.png"
imeg [1] = "image/logo.png"


const getimage = ()=>{ 
    const randomImage =
    images[Math.floor(Math.random() * 4)+1];
    setimg(randomImage);
};
//   const show  = ()=>{
// setimgs(imeg);
//   }
// setTimeout(show,3000)
const show  = ()=>{
    images;
}
 if( )
  return (

    <div className='Task'>
        <div className='container'>
         {/* <div className='images '>
            <img src={imgs} style ={{height: 200,width:200}} />
           <img src={imgs} style ={{height: 200,width:200}} />
            </div> */}
        

    {/* <img src= />
    <img src= /> */}
            
         
         <button onClick={()=>getimage()} >Click me</button>
        <img src={img} style ={{height: 200,width:200}} />
        </div>

    </div>
 
  )
}

export default Task