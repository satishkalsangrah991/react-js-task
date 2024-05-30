import { useEffect, useState } from "react";
import "./App.css";
import Emi from "./components/EmiCalculater/Emi";
import MenuScrollNavigationBar from "./components/MenuScrollNavigation/MenuScrollNavigationBar";
import MultiSearchinput from "./components/MultipleSearchInputfeild/MultiSearchinput";
import MultiImageUpload from "./components/MultipleimagesUpload/MultiImageUpload";
import MyCurrencyConvert from "./components/MyCurrencyConvert";
import QuizApp from "./components/QuizApp/QuizApp";
import TabBar from "./components/TabButton/TabBar";
import Throttle from "./components/ThrottleReactjs/Throttle";
import CurrencyConvertor from "./components/currency-convertor";
import LikeButton from "./components/likebuttontask/LikeButton";
import Pagination from "./components/pagination/Pagination";
import ProgressBar from "./components/progressbar/ProgressBar";
import TagsInputField from "./components/tagsinputComponets/TagsInputField";
import TextCopyClipBoard from "./components/CopyTextToreactjs/TextCopyClipBoard";
import Notes from "./components/Draganddropnotes/Notes";
import MainInfiniteScroll from "./components/InfiniteScrollTask/MainInfiniteScroll";
import CountDownTimer from "./components/countdowntimer/CountDownTimer";
import StopWatch from "./components/stopwatch/StopWatch";
import Autocomplete from "./components/Autocompletetypeboard/Autocomplete";
import StarRating from "./components/startratingecom/StarRating";
import Memorygame from "./components/memorygame/Memorygame";
import MultifilterCategory from "./components/categorymultifiter/MultifilterCategory";
import EsaywayinfinteScroll from "./components/InfiniteScrollTask/EsaywayinfinteScroll";
import CouterWithundoRedo from "./components/couterwithundoredo/CouterWithundoRedo";
import Carosule from "./components/carousal/Carosule";
import TodoDragDrop from "./components/todoDraganddrop/TodoDragDrop";
import SelectebleGrid from "./components/selecteblegrid/SelectebleGrid";
import ModalwithCarosual from "./components/modalwithcarosual/ModalwithCarosual";
import OtpInput from "./components/otpinputFeild/OtpInput";
import GenrateRandomColor from "./components/genraterandomcolor/GenrateRandomColor";
const games = ["cricket","footbal","hockey"]
function App() {

  const checkValue =(c)=>{
console.log(c)
  }




  const [theme, setTheme] = useState(() => {
    // Check local storage for theme preference
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'light';
  });

  useEffect(() => {
    // Update the HTML element with the theme class
    document.documentElement.className = theme;
    // Save theme preference to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

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


  {/* infinitescrolling */}
  {/* <MainInfiniteScroll/> */}
  {/* <EsaywayinfinteScroll/> */}

  
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


{/* <Throttle/> */}

{/* text copy clipboard */}
{/* <TextCopyClipBoard/> */}

{/* Drag and drop notes */}
{/* <Notes/> */}

{/* countdowntimer  */}

{/* <CountDownTimer/> */}

{/* stop watch */}
{/* <StopWatch/> */}

{/* autocomplete */}
{/* <Autocomplete /> */}

{/* startrting */}

{/* <StarRating/> */}

{/* memory game  */}

{/* <Memorygame/> */}

{/* multifilter */}
{/* <MultifilterCategory/> */}


{/* couter with undo redo */}

{/* <CouterWithundoRedo/> */}
{/* <Carosule/> */}
{/* todolistdragDrop */}
{/* <TodoDragDrop/> */}

{/* selecteble grid */}
{/* <SelectebleGrid/> */}

{/* modal with carosual */}
{/* <ModalwithCarosual/> */}

{/* otpinputField */}
{/* <OtpInput/> */}

{/* genrateRandomColor */}
{/* <GenrateRandomColor/> */}
    </>
  );
}

export default App;
