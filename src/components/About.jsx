
// import React from "react";
// // import Tilt from "react-tilt";
// import Tilt from "react-parallax-tilt";

// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />
//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
//       >
//         I'm a MERN stack developer with strong skills in C++, DSA, and web development. I have experience working with React, Node.js, MongoDB, and Tailwind CSS to build scalable applications. My commitment to staying updated with the latest trends and technologies ensures that I deliver cutting-edge, high-performance, and maintainable solutions. With expertise in both frontend and backend development and a passion for problem-solving, I am well-equipped to tackle challenges and deliver exceptional results. Let's connect and bring ideas to life! 
//       </motion.p>

//       {/* Updated Wrapper to Center Cards */}
//       <div className='mt-20 flex justify-center items-center gap-10 flex-wrap'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");

// import React from "react";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import profilePic from "../assets/profile.jpg"; // Update with the correct path

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />
//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <div className='flex flex-col md:flex-row items-center md:items-start gap-10'>
//       {/* Text Section */}
//       <div className='md:w-2/3'>
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>Introduction</p>
//         </motion.div>

//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
//         >
//           I'm a MERN stack developer with strong skills in C++, DSA, and web development. I have experience working with React, Node.js, MongoDB, and Tailwind CSS to build scalable applications. My commitment to staying updated with the latest trends and technologies ensures that I deliver cutting-edge, high-performance, and maintainable solutions. With expertise in both frontend and backend development and a passion for problem-solving, I am well-equipped to tackle challenges and deliver exceptional results. Let's connect and bring ideas to life! 
//         </motion.p>

//         {/* Service Cards */}
//         <div className='mt-10 flex justify-center items-center gap-10 flex-wrap'>
//           {services.map((service, index) => (
//             <ServiceCard key={service.title} index={index} {...service} />
//           ))}
//         </div>
//       </div>

//       {/* Profile Image Section */}
//       <motion.div
//         variants={fadeIn("left", "spring", 0.5, 0.75)}
//         className='md:w-1/3 flex justify-center'
//       >
//         <img
//           src={profilePic}
//           alt='Shikha Gupta'
//           className='w-48 h-48 rounded-full object-cover shadow-lg border-4 border-gray-400'
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(About, "about");

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profilePic from "../assets/profile.jpg"; // Update with the correct path

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      className='flex flex-col md:flex-row items-center md:items-start gap-10'
    >
      {/* Left Section: Profile Image */}
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className='md:w-1/3 flex justify-center'
      >
        <img
          src={profilePic}
          alt='Shikha Gupta'
          className='w-48 h-48 rounded-full object-cover shadow-lg border-4 border-gray-400'
        />
      </motion.div>

      {/* Right Section: Text & Service Cards */}
      <div className='md:w-2/3'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a MERN stack developer with strong skills in C++, DSA, and web development. I have experience working with React, Node.js, MongoDB, and Tailwind CSS to build scalable applications. My commitment to staying updated with the latest trends and technologies ensures that I deliver cutting-edge, high-performance, and maintainable solutions. With expertise in both frontend and backend development and a passion for problem-solving, I am well-equipped to tackle challenges and deliver exceptional results. Let's connect and bring ideas to life! 
        </motion.p>

        {/* Service Cards */}
        <div className='mt-10 flex justify-center md:justify-start items-center gap-10 flex-wrap md:flex-nowrap'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About, "about");
