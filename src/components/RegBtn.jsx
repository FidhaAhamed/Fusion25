/**import '../index.css'


 const RegBtn = () => {
   
   return (
     <button className="reg-btn-gradient px-4 sm:px-8 md:px-16 py-2 md:py-4 rounded-[50px] text-white text-sm sm:text-lg md:text-xl font-semibold flex items-center gap-x-2 whitespace-nowrap uppercase"
     >
         <h1>REGISTER NOW</h1>
         <img src='/Images/reg-btn-icon.png'/>
     </button>
   )
 }
 export default RegBtn**/



import '../index.css'


 const RegBtn = () => {
   const handleRegistrationClick = () => {
     window.open("https://unstop.com/o/2JrcoAe?lb=krBYiex1&utm_medium=Share&utm_source=shortUrl", "_blank", "noopener,noreferrer");
   };
   return (
     <button className="reg-btn-gradient px-4 sm:px-8 md:px-16 py-2 md:py-4 rounded-[50px] text-white text-sm sm:text-lg md:text-xl font-semibold flex items-center gap-x-2 whitespace-nowrap uppercase">
         <h1>REGISTER NOW</h1>
         <img src='/Images/reg-btn-icon.png'/>
     </button>
   )
 }
 export default RegBtn

{/**import '../index.css'


const RegBtn = () => {
  return (
    <button className="reg-btn-gradient px-4 sm:px-8 md:px-16 py-2 md:py-4 rounded-[50px] text-white text-sm sm:text-lg md:text-xl font-semibold flex items-center gap-x-2 whitespace-nowrap uppercase">
        <h1>Registrations opening soon</h1>
        //*<img src='/Images/reg-btn-icon.png'/>
    </button>
  )
}
export default RegBtn **/}
