// import React, { useEffect, useState } from "react";
// const Task = () => {
//   //   const mehsull =[
//   //     'mehul1','mehusl2'
//   //   ]
//   //  const getMehsul  = ()=>{
//   //     mehsull.Math.floor(Math.random());
//   //  }
//   // //  console.log(getMehsul());

//   const [img, setimg] = useState("");
//   const [imgs, setimgs] = useState("");
//   const images = [];
//   const imeg = [];

//   images[0] = "image/course-1-img.jpg";

//   images[1] = "image/bg-05.jpg";
//   images[2] = "image/course-01-img.png";
//   images[3] = "image/slide-2.jpg";
//   //-------------------------------------------------
//   images[4] = "image/image-01.png";
//   images[5] = "image/logo.png";

//   const getimage = () => {
//     const randomImage = images[Math.floor(Math.random() * images.length) + 1];
//     setimg(randomImage);
//   };
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       getimage();
// //     }, 2000);
// //     return () => setTimeout(interval, 2000);
// //   }, []);
// //   const pcs =()=>{
// //     images.map((e)=>(
// //         <img src={e} />
// //     ))
// //   }
//   const stop =()=>{
    
//   const change  = setInterval(getimage,1000)

//     setTimeout(() => {
//        clearInterval(change)
//        getimage()
//     }, 4000)
//   }

//   return (
//     <div className="Task">
//       <div className="container">
        
           
        
//         {/* <div className='images '>
//             <img src={imgs} style ={{height: 200,width:200}} />
//            <img src={imgs} style ={{height: 200,width:200}} />
//             </div> */}

//         {/* <img src= />
//     <img src= /> */}

//         {/* <button onClick={() =>  !stop()?  :  }>Click me</button> */}
//         <img src={img} style={{ height: 200, width: 200 }} />
//       </div>
//     </div>
//   );
// };

// export default Task;



