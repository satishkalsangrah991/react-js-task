import "./App.css";
import Emi from "./components/EmiCalculater/Emi";
import MenuScrollNavigationBar from "./components/MenuScrollNavigation/MenuScrollNavigationBar";
import MultiSearchinput from "./components/MultipleSearchInputfeild/MultiSearchinput";
import MultiImageUpload from "./components/MultipleimagesUpload/MultiImageUpload";
import MyCurrencyConvert from "./components/MyCurrencyConvert";
import QuizApp from "./components/QuizApp/QuizApp";
import TabBar from "./components/TabButton/TabBar";
import CurrencyConvertor from "./components/currency-convertor";
import LikeButton from "./components/likebuttontask/LikeButton";
import Pagination from "./components/pagination/Pagination";
import ProgressBar from "./components/progressbar/ProgressBar";
import TagsInputField from "./components/tagsinputComponets/TagsInputField";
const games = ["cricket","footbal","hockey"]
function App() {

  const checkValue =(c)=>{
console.log(c)
  }
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


  {/* <div>
    <TabBar/>
  </div> */}

     {/* progressbar  */}
       {/* <ProgressBar/> */}

       {/* like button */}
       {/* <LikeButton/> */}



    {/* <div className="flex justify-center">
  {
    games.map((val,index)=>{
return(
  <>
  <div key={index}>
    <input 
    type="radio"
     className="w-5 h-4 mx-2" 
    id="huey" 
    name="drone" 
     value={val} 
     onClick={()=>checkValue(val)}

     />
    <label htmlFor={val}>{val}</label>
  </div>
  </>
)
    })
  }
    </div> */}

 
      {/*EMI Calculater  */}

      {/* <Emi/> */}


      {/* quiz App */}
      {/* <QuizApp/> */}

{/* pagination  simple*/}
      {/* <Pagination/> */}

      {/* tags input componets */}
      {/* <TagsInputField/> */}

      {/* multiple images */}

      {/* <MultiImageUpload/> */}


{/* multipleSearch */}
{/* <MultiSearchinput/>  */}



  
    </>
  );
}

export default App;
