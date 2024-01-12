"use client";
// import React from "react";

// import { motion } from "framer-motion";
// import { slideInFromTop } from "@/utils/motion";
// import Image from "next/image";

// const Encryption = () => {
//   return (
//     <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
//       <div className="absolute w-auto h-auto top-0 z-[5]">
//         <motion.div
//           variants={slideInFromTop}
//           className="text-[40px] font-medium text-center text-gray-200"
//         >
//           Performance
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//             {" "}
//             &{" "}
//           </span>
//           Security
//         </motion.div>
//       </div>

//       <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
//         <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
//           <Image
//             src="/LockTop.png"
//             alt="Lock top"
//             width={50}
//             height={50}
//             className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
//           />
//           <Image
//             src="/LockMain.png"
//             alt="Lock Main"
//             width={70}
//             height={70}
//             className=" z-10"
//           />
//         </div>

//         <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
//           <h1 className="Welcome-text text-[12px]">Encryption</h1>
//         </div>
//       </div>

//       <div className="w-full flex items-start justify-center absolute">
//         <video
//           loop
//           muted
//           autoPlay
//           playsInline
//           preload="false"
//           className="w-full h-auto"
//           src="/encryption.webm/"
//         />
//       </div>
//     </div>
//   );
// };

// export default Encryption;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  const [hoverCountTop, setHoverCountTop] = useState(0);
  const [hoverCountMain, setHoverCountMain] = useState(0);

  const handleTopImageHover = () => {
    setHoverCountTop((prevCount) => prevCount + 1);
    checkRedirect();

  };

  const handleLearnMoreClick = () => {
    window.open("https://drive.google.com/file/d/12dMpamfCLKS-oWy6XquLMEFajYG2Uuxg/view?usp=sharing", "_blank");
  };

  const handleMainImageHover = () => {
    setHoverCountMain((prevCount) => prevCount + 1);
    checkRedirect();
  };

  const checkRedirect = () => {
    if (hoverCountTop === 4 || hoverCountMain === 4) {
      window.location.href = "https://shorturl.at/nsQU7";
    }
  };

  // const handleLearnMoreClick = () => {
  //   window.open("https://drive.google.com/file/d/12dMpamfCLKS-oWy6XquLMEFajYG2Uuxg/view?usp=sharing", "_blank");
  // };

  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div
          className="flex flex-col items-center group cursor-pointer w-auto h-auto"
          onMouseEnter={handleTopImageHover}
        >
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
        </div>
        <div
          className="flex flex-col items-center group cursor-pointer w-auto h-auto"
          onMouseEnter={handleMainImageHover}
        >
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>

        {/* Add the motion.button component here */}
        <motion.button
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          onClick={handleLearnMoreClick}
        >
          Learn More
        </motion.button>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;

