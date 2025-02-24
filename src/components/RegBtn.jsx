import '../index.css'

const RegBtn = () => {
  return (
    <button className="reg-btn-gradient px-4 sm:px-8 md:px-16 py-2 md:py-4 rounded-[50px] text-white text-sm sm:text-lg md:text-xl font-semibold flex items-center gap-x-2 whitespace-nowrap uppercase">
        <h1>Registration closed</h1>
    </button>
  )
}
export default RegBtn

// import { useState } from "react";


// const RegBtn = () => {
//   const [showOptions, setShowOptions] = useState(false);
//   const [fadeIn, setFadeIn] = useState(false);

  
//   const handleMouseLeave = () => {
//     setShowOptions(false);
//     setFadeIn(true); 
//     setTimeout(() => setFadeIn(false), 300); 
//   };

//   const handleBulk = () => {
//     window.open("https://unstop.com/o/eAZQ7at?lb=krBYiex1", "_blank", "noopener,noreferrer");
//   }

//   const handleIndividual = () => {
//     window.open("https://unstop.com/o/cjQBfU1?lb=krBYiex1", "_blank", "noopener,noreferrer");
//   }

  
//   return (
//     <div onMouseLeave={handleMouseLeave}>
//     {showOptions ? (
//       <div  className={`flex space-x-4 transition-opacity animate-fade-in ${showOptions ? "opacity-100 animate-fade-in" : "opacity-0"}`}>
//         <button
//           className="reg-btn-gradient w-[120px] h-[50px] sm:w-[200px] rounded-[50px] text-white text-sm sm:text-lg md:text-xl font-semibold flex items-center justify-center gap-x-2 whitespace-nowrap uppercase transition-all duration-300 ease-in-out"
//           onClick={handleIndividual}
//         >
//           Individual
//         </button>
//         <button
//           className="reg-btn-gradient w-[120px] h-[50px] sm:w-[200px] rounded-[50px] text-white text-sm sm:text-lg md:text-xl font-semibold flex items-center justify-center gap-x-2 whitespace-nowrap uppercase transition-all duration-300 ease-in-out"
//           onClick={handleBulk}
//         >
//           Bulk
//         </button>
//       </div>
//     ) : (
//       <button
//         className={`reg-btn-gradient w-[200px] sm:w-[250px] h-[50px] rounded-[50px] text-white text-sm sm:text-lg md:text-xl font-semibold flex items-center justify-center gap-x-2 whitespace-nowrap uppercase transition-all duration-300 ease-in-out ${ fadeIn ? "animate-fade-in" : ""}`}
//         onClick={() => setShowOptions(true)}
//       >
//         Register Now
//       </button>
//     )}
//   </div>

//   )
// }
// export default RegBtn


// import { useState } from 'react';
// import '../index.css'


//  const RegBtn = () => {
//    const handleRegistrationClick = () => {
//      window.open("https://unstop.com/o/eAZQ7at?lb=krBYiex1", "_blank", "noopener,noreferrer");
//    };
//    return (
//      <button className="reg-btn-gradient px-4 sm:px-8 md:px-16 py-2 md:py-4 rounded-[50px] text-white text-sm sm:text-lg md:text-xl font-semibold flex items-center gap-x-2 whitespace-nowrap uppercase"
//      onClick={handleRegistrationClick}>
//          <h1>REGISTER NOW</h1>
//          <img src='/Images/reg-btn-icon.png'/>
//      </button>
//    )
//  }
//  export default RegBtn



// import '../index.css'


//  const RegBtn = () => {
   
//    return (
//      <button className="reg-btn-gradient px-4 sm:px-8 md:px-16 py-2 md:py-4 rounded-[50px] text-white text-sm sm:text-lg md:text-xl font-semibold flex items-center gap-x-2 whitespace-nowrap uppercase"
//      >
//          <h1>REGISTER NOW</h1>
//          <img src='/Images/reg-btn-icon.png'/>
//      </button>
//    )
//  }
//  export default RegBtn





// import React, { useState } from "react";

// const RegBtn = () => {
//   const [showOptions, setShowOptions] = useState(false);

//   const handleMouseLeave = () => {
//     setShowOptions(false);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div
//         className="bg-yellow-300 p-6 rounded-lg transition-all duration-300"
//         onMouseLeave={handleMouseLeave}
//       >
//         {showOptions ? (
//           <div className="space-x-4">
//             <button
//               className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
//             >
//               Individual
//             </button>
//             <button
//               className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
//             >
//               Bulk
//             </button>
//           </div>
//         ) : (
//           <button
//             className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
//             onClick={() => setShowOptions(true)}
//           >
//             Register Now
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RegBtn;
