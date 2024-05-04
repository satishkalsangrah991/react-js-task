// import "./emi.css";
import { useEffect, useState } from "react";
import TextInput from "./text-input";
import SliderInput from "./slider-input";
// import { tenureData } from "./utils/constants";

// import TextInput from "./components/text-input";
// import SliderInput from "./components/slider-input";

export default function Emi() {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
console.log(downPayment , emi)
const [val,setVal] =useState(0)
 const numberWithCommas=(x) =>{
    if (x) return `₹ ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }

  const tenureData = [12, 24, 36, 48, 60];

//   const EMI1 =
//       (100 * 10/100 * (1 + 10/100) ** 2) /
//       ((1 + 10/100) ** 2 - 1);
//       console.log(EMI1)


  const calculateEMI = (downpayment) => {
    // EMI amount = [P x R x (1+R)^N]/[(1+R)^N-1]
    console.log(downPayment)
    if (!cost) return;

    const loanAmt = cost - downpayment;
    const rateOfInterest = interest / 100;
    const numOfYears = tenure / 12;

    const EMI =
      (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numOfYears) /
      ((1 + rateOfInterest) ** numOfYears - 1);
      console.log(EMI)
        const EMI1 =loanAmt*rateOfInterest*numOfYears 
      console.log(EMI1)
      console.log((+EMI1 + +cost))
       return Number(EMI / 12).toFixed(0);
  };

  const calculateDP = (emi) => {
    if (!cost) return;

    const downPaymentPercent = 100 - (emi / calculateEMI(0)) * 100;
    return Number((downPaymentPercent / 100) * cost).toFixed(0);
  };

  useEffect(() => {
    if (!(cost > 0)) {
      setDownPayment(0);
      setEmi(0);
    }

    const emi = calculateEMI(downPayment);
    // console.log(emi)
    setEmi(emi);
  }, [tenure, cost]);

  const updateEMI = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    const emi = calculateEMI(dp);
    console.log(emi)
    setEmi(emi);
  };
  const updateDownPayment = (e) => {
    if (!cost) return;

    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));

    const dp = calculateDP(emi);
    setDownPayment(dp);
  };

  const totalDownPayment = () => {
    return numberWithCommas(
      (Number(downPayment) + (cost - downPayment) * (fee / 100)).toFixed(0)
    );
  };

  const totalEMI = () => {
    return numberWithCommas((emi * tenure).toFixed(0));
  };

  return (
    <div className="App flex flex-col max-w-[700px] mx-auto mt-10 border p-4 shadow-lg rounded-md">
      <span className="title clear-start text-indigo-700 my-4" style={{ fontSize: 30, marginTop: 10 }}>
        EMI Calculator
      </span>

      <TextInput
        title={"Total Cost of Asset"}
        state={cost}
        setState={setCost}
      />

      <TextInput
        title={"Interest Rate (in %)"}
        state={interest}
        setState={setInterest}
      />

      <TextInput
        title={"Processing Fee (in %)"}
        state={fee}
        setState={setFee}
      />

      <SliderInput
        title="Down Payment"
        underlineTitle={`Total Down Payment - ${totalDownPayment()}`}
        onChange={updateEMI}
        state={downPayment}
        min={0}
        max={cost}
        labelMin={"0%"}
        labelMax={"100%"}
      />

      <SliderInput
        title="Loan per Month"
        underlineTitle={`Total Loan Amount - ${totalEMI()}`}
        onChange={updateDownPayment}
        state={emi}
        min={calculateEMI(cost)}
        max={calculateEMI(0)}
      />

      <span className="title text-lg font-sans font-semibold my-3">Tenure </span>
      <div className="tenureContainer flex justify-between px-2">
        {tenureData.map((t) => {
          return (
            <button
              className={`border-2 px-3 py-2.5 text-md font-sans font-semibold rounded-full ${t === tenure ? "selected bg-indigo-600 text-white font-sans font-semibold border-none px-3 py-2.5" : ""}`}
              onClick={() => setTenure(t)}
            >
              {t}
            </button>
          );
        })}
      </div>
{/* 
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Range Slider</h2>
        <div className="mb-4">
          <label htmlFor="price-range" className="block text-gray-700 font-bold mb-2">Price Range</label>
          <input type="range" id="price-range" 
            labelMin={"0%"}
        labelMax={"100%"}
          className="w-full accent-indigo-600" min={0} max={2000}
        //   oninput="updatePrice(this.value)" 
        onChange={(e)=>setVal(e.target.value)}

          />
        </div>
        <div className="flex justify-between text-gray-500">
          <span id="minPrice">{val}

           </span>
          <span id="maxPrice">$2000</span>
        </div>
      </div>


      <div className="mt-32 max-w-xl mx-auto">
    <label className="text-white">Range</label>
    <input id="range" type="range" className="bloc w-full py-2 mt-2 text-gray-700 bg-indigo-500 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focusring"/>
</div> */}


    </div>
  );
}