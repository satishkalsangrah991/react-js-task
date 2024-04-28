import "./App.css";
import MenuScrollNavigationBar from "./components/MenuScrollNavigation/MenuScrollNavigationBar";
import MyCurrencyConvert from "./components/MyCurrencyConvert";
import TabBar from "./components/TabButton/TabBar";
import CurrencyConvertor from "./components/currency-convertor";
import LikeButton from "./components/likebuttontask/LikeButton";
import ProgressBar from "./components/progressbar/ProgressBar";

function App() {
  return (
  
    <>
    {/* currency converter */}

   {/* <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
       <div className="container">
         <CurrencyConvertor />
         <MyCurrencyConvert/>
       </div>
  

   

     </div> */}

{/* menu scrollbar */}
  {/* <div>
  <MenuScrollNavigationBar/>
  </div> */}

  
{/* tab bar */}
  <div>
    <TabBar/>
  </div>

     {/* progressbar  */}
       {/* <ProgressBar/> */}

       {/* like button */}
       {/* <LikeButton/> */}



      
 
  
    </>
  );
}

export default App;
