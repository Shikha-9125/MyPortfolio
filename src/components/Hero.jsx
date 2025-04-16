
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
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import Lottie from "lottie-react";
// import avatarAnimation from "../assets/avatar.json"; // Lottie animation file

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto flex items-center">
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-between items-center`}
//       >
//         {/* Left Section - Text Content */}
//         <div className="flex flex-col">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white"> 
//             Hey, it's me <span className="text-[#915EFF]">Shikha</span>
//           </h1>
//           <p className="text-lg sm:text-xl mt-3 text-gray-300">
//             Transforming ideas into <br className="sm:block hidden" />
//             functional web solutions!
//           </p>

//           {/* Resume Link Button */}
//           <div className="mt-5">
//             <a
//               href="https://docs.google.com/document/d/1lfuzDCQXRfC4I1PbilAYxektrU8wSrORGbb39IKN93M/edit?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#915EFF] text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:bg-[#7a4fe0] transition-all duration-300"
//             >
//               📄 View Resume
//             </a>
//           </div>
//         </div>

//         {/* Right Section - Larger Lottie Avatar */}
//         <div className="w-72 h-72 md:w-96 md:h-96">
//           <Lottie animationData={avatarAnimation} loop={true} />
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
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { styles } from "../styles";
// import Lottie from "lottie-react";
// import avatarAnimation from "../assets/avatar.json"; // Lottie animation file

// const Hero = () => {
//   const [status, setStatus] = useState("idle");
//   const [isListening, setIsListening] = useState(false);
//   const [femaleVoice, setFemaleVoice] = useState(null);

//   useEffect(() => {
//     const loadVoices = () => {
//       const voices = speechSynthesis.getVoices();
//       const female = voices.find((voice) =>
//         voice.name.includes("Female") ||
//         voice.name.includes("Google UK English Female") ||
//         voice.name.includes("Microsoft Zira") ||
//         voice.name.includes("Samantha") // Add more female voice names if needed
//       );
//       setFemaleVoice(female || voices[0]); // Set female voice or fallback
//     };

//     if (speechSynthesis.onvoiceschanged !== undefined) {
//       speechSynthesis.onvoiceschanged = loadVoices;
//     }

//     loadVoices(); // Initial load
//   }, []);

//   const SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;

//   if (!SpeechRecognition) {
//     alert("Speech recognition is not supported in this browser.");
//     return null;
//   }

//   const recognition = new SpeechRecognition();
//   recognition.continuous = false;
//   recognition.lang = "en-US";
//   recognition.interimResults = false;
//   recognition.maxAlternatives = 1;

//   const startListening = () => {
//     setStatus("listening");
//     setIsListening(true);
//     recognition.start();
//   };

//   recognition.onresult = (event) => {
//     const transcript = event.results[0][0].transcript.toLowerCase();
//     console.log("Recognized:", transcript);

//     if (transcript.includes("tell me about yourself")) {
//       setStatus("speaking");
//       speakText(
//         "Hey, I am Shikha Gupta. Currently, I am pursuing my BTech degree from Dr. B.R. Ambedkar National Institute of Technology. " +
//         "I have a strong passion for coding, problem-solving, and development. " +
//         "Besides coding, I love music and writing poetry. " +
//         "I am also passionate about building projects and working on innovations. " +
//         "Let's connect and collaborate!"
//       );
//     } else {
//       setStatus("idle");
//     }

//     setIsListening(false);
//   };

//   recognition.onerror = (event) => {
//     console.error("Speech Recognition Error:", event.error);
//     setStatus("idle");
//     setIsListening(false);
//   };

//   recognition.onend = () => {
//     setStatus("idle");
//     setIsListening(false);
//   };

//   const speakText = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "en-US";
//     utterance.rate = 1;

//     if (femaleVoice) {
//       utterance.voice = femaleVoice;
//     } else {
//       console.warn("No female voice found. Using default voice.");
//     }

//     speechSynthesis.speak(utterance);
//   };

//   return (
//     <section className="relative w-full h-screen mx-auto flex items-center">
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-between items-center`}
//       >
//         {/* Left Section - Text Content */}
//         <div className="flex flex-col">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white">
//             Hey, it's me <span className="text-[#915EFF]">Shikha</span>
//           </h1>
//           <p className="text-lg sm:text-xl mt-3 text-gray-300">
//             Transforming ideas into <br className="sm:block hidden" />
//             functional web solutions!
//           </p>

//           {/* Resume Link Button */}
//           <div className="mt-5 flex gap-4">
//             <a
//               href="https://docs.google.com/document/d/1lfuzDCQXRfC4I1PbilAYxektrU8wSrORGbb39IKN93M/edit?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#915EFF] text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:bg-[#7a4fe0] transition-all duration-300"
//             >
//               📄 View Resume
//             </a>

//             {/* Voice Assistant Button */}
//             <button
//               onClick={startListening}
//               disabled={isListening}
//               className="bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 disabled:bg-gray-500"
//             >
//               {isListening ? "Listening..." : "🎤 Ask Me"}
//             </button>
//           </div>
//         </div>

//         {/* Right Section - Larger Lottie Avatar */}
//         <div className="w-72 h-72 md:w-96 md:h-96">
//           <Lottie animationData={avatarAnimation} loop={true} />
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
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { styles } from "../styles";
// import Lottie from "lottie-react";
// import avatarAnimation from "../assets/avatar.json"; // Lottie animation file

// const Hero = () => {
//   const [status, setStatus] = useState("idle");
//   const [isListening, setIsListening] = useState(false);
//   const [femaleVoice, setFemaleVoice] = useState(null);

//   useEffect(() => {
//     const loadVoices = () => {
//       const voices = speechSynthesis.getVoices();
//       const female = voices.find((voice) =>
//         voice.name.includes("Female") ||
//         voice.name.includes("Google UK English Female") ||
//         voice.name.includes("Microsoft Zira") ||
//         voice.name.includes("Samantha") // Add more female voice names if needed
//       );
//       setFemaleVoice(female || voices[0]); // Set female voice or fallback
//     };

//     if (speechSynthesis.onvoiceschanged !== undefined) {
//       speechSynthesis.onvoiceschanged = loadVoices;
//     }

//     loadVoices(); // Initial load
//   }, []);

//   const SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;

//   if (!SpeechRecognition) {
//     alert("Speech recognition is not supported in this browser.");
//     return null;
//   }

//   const recognition = new SpeechRecognition();
//   recognition.continuous = false;
//   recognition.lang = "en-US";
//   recognition.interimResults = false;
//   recognition.maxAlternatives = 1;

//   const startListening = () => {
//     setStatus("listening");
//     setIsListening(true);
//     recognition.start();
//   };

//   recognition.onresult = (event) => {
//     const transcript = event.results[0][0].transcript.toLowerCase();
//     console.log("Recognized:", transcript);

//     if (transcript.includes("tell me about yourself")) {
//       setStatus("speaking");
//       speakText(
//         "Hey, I am Shikha Gupta. Currently, I am pursuing my BTech degree from Dr. B.R. Ambedkar National Institute of Technology. " +
//         "I have a strong passion for coding, problem-solving, and development. " +
//         "Besides coding, I love music and writing poetry. " +
//         "I am also passionate about building projects and working on innovations. " +
//         "Let's connect and collaborate!"
//       );
//     } else {
//       speakText("Unable to hear you properly. Can you repeat?");
//     }

//     setStatus("idle");
//     setIsListening(false);
//   };

//   recognition.onerror = (event) => {
//     console.error("Speech Recognition Error:", event.error);
//     speakText("Unable to hear you properly. Can you repeat?");
//     setStatus("idle");
//     setIsListening(false);
//   };

//   recognition.onend = () => {
//     setStatus("idle");
//     setIsListening(false);
//   };

//   const speakText = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "en-US";
//     utterance.rate = 1;

//     if (femaleVoice) {
//       utterance.voice = femaleVoice;
//     } else {
//       console.warn("No female voice found. Using default voice.");
//     }

//     speechSynthesis.speak(utterance);
//   };

//   return (
//     <section className="relative w-full h-screen mx-auto flex items-center">
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-between items-center`}
//       >
//         {/* Left Section - Text Content */}
//         <div className="flex flex-col">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white">
//             Hey, it's me <span className="text-[#915EFF]">Shikha</span>
//           </h1>
//           <p className="text-lg sm:text-xl mt-3 text-gray-300">
//             Transforming ideas into <br className="sm:block hidden" />
//             functional web solutions!
//           </p>

//           {/* Resume Link Button */}
//           <div className="mt-5 flex gap-4">
//             <a
//               href="https://docs.google.com/document/d/1lfuzDCQXRfC4I1PbilAYxektrU8wSrORGbb39IKN93M/edit?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#915EFF] text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:bg-[#7a4fe0] transition-all duration-300"
//             >
//               📄 View Resume
//             </a>

//             {/* Voice Assistant Button */}
//             <button
//               onClick={startListening}
//               disabled={isListening}
//               className="bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 disabled:bg-gray-500"
//             >
//               {isListening ? "Listening..." : "🎤 Ask Me about myself 😊 "}
//             </button>
//           </div>
//         </div>

//         {/* Right Section - Larger Lottie Avatar */}
//         <div className="w-72 h-72 md:w-96 md:h-96">
//           <Lottie animationData={avatarAnimation} loop={true} />
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
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { styles } from "../styles";
// import Lottie from "lottie-react";
// import avatarAnimation from "../assets/avatar.json"; // Lottie animation file

// const Hero = () => {
//   const [status, setStatus] = useState("idle");
//   const [isListening, setIsListening] = useState(false);
//   const [femaleVoice, setFemaleVoice] = useState(null);
//   let silenceTimeout;

//   useEffect(() => {
//     const loadVoices = () => {
//       const voices = speechSynthesis.getVoices();
//       const female = voices.find((voice) =>
//         voice.name.includes("Female") ||
//         voice.name.includes("Google UK English Female") ||
//         voice.name.includes("Microsoft Zira") ||
//         voice.name.includes("Samantha") // Add more female voice names if needed
//       );
//       setFemaleVoice(female || voices[0]); // Set female voice or fallback
//     };

//     if (speechSynthesis.onvoiceschanged !== undefined) {
//       speechSynthesis.onvoiceschanged = loadVoices;
//     }

//     loadVoices(); // Initial load
//   }, []);

//   const SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;

//   if (!SpeechRecognition) {
//     alert("Speech recognition is not supported in this browser.");
//     return null;
//   }

//   const recognition = new SpeechRecognition();
//   recognition.continuous = false;
//   recognition.lang = "en-US";
//   recognition.interimResults = false;
//   recognition.maxAlternatives = 1;

//   const startListening = () => {
//     setStatus("listening");
//     setIsListening(true);
//     recognition.start();

//     silenceTimeout = setTimeout(() => {
//       if (isListening) {
//         speakText("Unable to hear you properly. Can you repeat?");
//         setStatus("idle");
//         setIsListening(false);
//       }
//     }, 2000); // Reduced delay to 5 seconds
//   };

//   recognition.onresult = (event) => {
//     clearTimeout(silenceTimeout);
//     const transcript = event.results[0][0].transcript.toLowerCase();
//     console.log("Recognized:", transcript);

//     if (transcript.includes("tell me about yourself")) {
//       setStatus("speaking");
//       speakText(
//         "Hey, I am Shikha Gupta. Currently, I am pursuing my BTech degree from Dr. B.R. Ambedkar National Institute of Technology. " +
//         "I have a strong passion for coding, problem-solving, and development. " +
//         "Besides coding, I love music and writing poetry. " +
//         "I am also passionate about building projects and working on innovations. " +
//         "Let's connect and collaborate!"
//       );
//     } else {
//       speakText("Unable to hear you properly. Can you repeat?");
//     }

//     setStatus("idle");
//     setIsListening(false);
//   };

//   recognition.onerror = (event) => {
//     clearTimeout(silenceTimeout);
//     console.error("Speech Recognition Error:", event.error);
//     speakText("Unable to hear you properly. Can you repeat?");
//     setStatus("idle");
//     setIsListening(false);
//   };

//   recognition.onend = () => {
//     setStatus("idle");
//     setIsListening(false);
//   };

//   const speakText = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "en-US";
//     utterance.rate = 1;

//     if (femaleVoice) {
//       utterance.voice = femaleVoice;
//     } else {
//       console.warn("No female voice found. Using default voice.");
//     }

//     speechSynthesis.speak(utterance);
//   };

//   return (
//     <section className="relative w-full h-screen mx-auto flex items-center">
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-between items-center`}
//       >
//         {/* Left Section - Text Content */}
//         <div className="flex flex-col">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white">
//             Hey, it's me <span className="text-[#915EFF]">Shikha</span>
//           </h1>
//           <p className="text-lg sm:text-xl mt-3 text-gray-300">
//             Transforming ideas into <br className="sm:block hidden" />
//             functional web solutions!
//           </p>

//           {/* Resume Link Button */}
//           <div className="mt-5 flex gap-4">
//             <a
//               href="https://docs.google.com/document/d/1lfuzDCQXRfC4I1PbilAYxektrU8wSrORGbb39IKN93M/edit?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#915EFF] text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:bg-[#7a4fe0] transition-all duration-300"
//             >
//               📄 View Resume
//             </a>

//             {/* Voice Assistant Button */}
//             <button
//               onClick={startListening}
//               disabled={isListening}
//               className="bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 disabled:bg-gray-500"
//             >
//               {isListening ? "Listening..." : "🎤 Ask Me about myself 😊 "}
//             </button>
//           </div>
//         </div>

//         {/* Right Section - Larger Lottie Avatar */}
//         <div className="w-72 h-72 md:w-96 md:h-96">
//           <Lottie animationData={avatarAnimation} loop={true} />
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
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import avatarAnimation from "../assets/avatar.json"; // Lottie animation file

const Hero = () => {
  const [status, setStatus] = useState("idle");
  const [isListening, setIsListening] = useState(false);
  const [femaleVoice, setFemaleVoice] = useState(null);
  let silenceTimeout;

  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      const female = voices.find((voice) =>
        voice.name.includes("Female") || 
        voice.name.includes("Google UK English Female") || 
        voice.name.includes("Microsoft Zira") || 
        voice.name.includes("Samantha") 
      );
      setFemaleVoice(female || voices[0]); 
    };

    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }

    loadVoices();
  }, []);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech recognition is not supported in this browser.");
    return null;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false; // Set to false for one-time recognition
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const startListening = () => {
    console.log("Listening started...");
    setStatus("listening");
    setIsListening(true);
    recognition.start();

    silenceTimeout = setTimeout(() => {
      if (isListening) {
        console.warn("Silence detected, prompting user...");
        speakText("Unable to hear you properly. Can you repeat?");
        setStatus("idle");
        setIsListening(false);
      }
    }, 3000); // Timeout after 3 seconds of no speech
  };

  recognition.onresult = (event) => {
    clearTimeout(silenceTimeout);
    const transcript = event.results[0][0].transcript.toLowerCase();
    console.log("Recognized speech:", transcript);

    if (transcript.includes("tell me about yourself")) {
      console.log("Matched: 'tell me about yourself'");
      setStatus("speaking");
      speakText(
        "Hey, I am Shikha Gupta. Currently, I am pursuing my BTech degree from Dr. B.R. Ambedkar National Institute of Technology. " +
        "I have a strong passion for coding, problem-solving, and development. " +
        "Besides coding, I love music and writing poetry. " +
        "I am also passionate about building projects and working on innovations. " +
        "Let's connect and collaborate!"
      );
    } else if (transcript.includes("what is your name")) {
      console.log("Matched: 'what is your name'");
      speakText("My name is Shikha. Nice to meet you!");
    } else {
      console.warn("No match found, responding with fallback...");
      speakText("Unable to hear you properly. Can you repeat?");
    }

    setStatus("idle");
    setIsListening(false);
  };

  recognition.onerror = (event) => {
    clearTimeout(silenceTimeout);
    console.error("Speech Recognition Error:", event.error);
    speakText("I didn't catch that. Can you say it again?");
    setStatus("idle");
    setIsListening(false);
  };

  recognition.onend = () => {
    console.log("Recognition ended.");
    setStatus("idle");
    setIsListening(false);
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;

    if (femaleVoice) {
      utterance.voice = femaleVoice;
    } else {
      console.warn("No female voice found. Using default voice.");
    }

    speechSynthesis.speak(utterance);
  };

  return (
    <section className="relative w-full h-screen mx-auto flex items-center">
      <div
        className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row justify-between items-center"
      >
        {/* Left Section - Text Content */}
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Hey, it's me <span className="text-[#915EFF]">Shikha</span>
          </h1>
          <p className="text-lg sm:text-xl mt-3 text-gray-300">
            Transforming ideas into <br className="sm:block hidden" />
            functional web solutions!
          </p>

          {/* Resume Link Button */}
          <div className="mt-5 flex gap-4">
            <a
              href="https://drive.google.com/file/d/1uJPa-zPi54pGsiLoL8SmErucC_krKsNS/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#915EFF] text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:bg-[#7a4fe0] transition-all duration-300"
            >
              📄 View Resume
            </a>

            {/* Voice Assistant Button */}
            <button
              onClick={startListening}
              disabled={isListening}
              className="bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 disabled:bg-gray-500"
            >
              {isListening ? "Listening..." : "🎤 Ask Me about myself 😊 "}
            </button>
          </div>
        </div>

        {/* Right Section - Larger Lottie Avatar */}
        <div className="w-72 h-72 md:w-96 md:h-96">
          <Lottie animationData={avatarAnimation} loop={true} />
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
