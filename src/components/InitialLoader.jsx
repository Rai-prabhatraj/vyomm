// import { useRouter } from "next/router";
// import Title from "./Head";

// export default function InitialLoader() {
//   const router = useRouter();

//   return (
//     <div className="loader w-screen h-screen bg-black z-[28]  flex items-center justify-center">
//       <Title route={router.pathname} />
//       <video autoPlay loop muted={false} playsInline className="w-screen h-screen">
//         <source src="/preloader.mp4" type="video/mp4" />
       
//       </video>
//     </div>
//   );
// }

export default function InitialLoader() {
  return (
    <div className="loader w-screen h-screen bg-black z-[28]  ">
      <video
        src="https://i.imgur.com/86MsBC7.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
}

