import React from "react";

export default function Loader() {
//   return (
//     <div className="loader w-screen h-screen bg-black z-[28]  flex items-center justify-center">
//       <video autoPlay playsInline loop muted={false} className="w-full h-full">
//         <source src="/preloader.mp4" type="video/mp4" />
        
//       </video>
//     </div>
//   );
// }
return (
  <div className="loader w-screen h-screen bg-black z-[28] ">
    <video src="https://i.imgur.com/86MsBC7.mp4" autoPlay loop muted={false} className="w-full h-full object-cover"></video>
  </div>
)
}