
// import { motion } from "framer-motion";
// import { styles } from "../styles";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hey, its me <span className='text-[#915EFF]'>Shikha</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-1 text-white-10`}>
//             Transforming ideas into <br className='sm:block hidden' />
//             functional web solutions!
//           </p>
//         </div>
//       </div>

//       {/* Removed <ComputersCanvas /> */}

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import profilePic from "../assets/profile.jpg"; // Update path if needed

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto flex items-center">
//       <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-between items-center`}>
        
//         {/* Left Section - Text Content */}
//         <div className="flex flex-col">
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hey, it's me <span className="text-[#915EFF]">Shikha</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-3 text-gray-300`}>
//             Transforming ideas into <br className="sm:block hidden" />
//             functional web solutions!
//           </p>

//           {/* Resume Link Button */}
//           <div className="mt-5">
//             <a
//               href="https://docs.google.com/document/d/1lfuzDCQXRfC4I1PbilAYxektrU8wSrORGbb39IKN93M/edit?usp=sharing" // Replace with your actual Google Drive link
//               target="_blank"  // To open in a new tab
//               className="bg-[#915EFF] text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:bg-[#7a4fe0] transition-all duration-300"
//             >
//               📄 View Resume
//             </a>
//           </div>
//         </div>

//         {/* Right Section - Profile Picture */}
//         <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-[#915EFF] shadow-lg">
//           <img src={profilePic} alt="Shikha Gupta" className="w-full h-full object-cover rounded-full" />
//         </div>
//       </div>

//       {/* Scroll Down Indicator */}
//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { motion } from "framer-motion";
import { styles } from "../styles";
import profilePic from "../assets/profile.jpg"; // Update path if needed

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center">
      <div className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-between items-center`}>
        
        {/* Left Section - Text Content */}
        <div className="flex flex-col mt-10">  {/* Adjusted margin-top */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, it's me <span className="text-[#915EFF]">Shikha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-gray-300`}>
            Transforming ideas into <br className="sm:block hidden" />
            functional web solutions!
          </p>

          {/* Resume Link Button */}
          <div className="mt-5">
            <a
              href="https://drive.google.com/file/d/your_file_id/view?usp=sharing" // Replace with your actual Google Drive link
              target="_blank"  // To open in a new tab
              className="bg-[#915EFF] text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:bg-[#7a4fe0] transition-all duration-300"
            >
              📄 View Resume
            </a>
          </div>
        </div>

        {/* Right Section - Profile Picture */}
        <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-[#915EFF] shadow-lg">
          <img src={profilePic} alt="Shikha Gupta" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
