// import React, { Fragment, useState } from 'react'
// import DefaultLayout from '../layout/DefaultLayout'

// const MoneyCount = () => {
//     const money = [10,50,100,500,1000,2000]
//     const [value,setValue] =useState('')
//     console.log(value)
//   return (
//   <>
//     <DefaultLayout>
//         <div className='container mx-auto'>
//         <div className='shadow-lg bg-white px-1 border max-w-[900px] mx-auto py-3'>
//          {/* <div className='flex justify-between gap-2'> */}
// {
//     money.map((val,i)=>{
//         return(
//             <Fragment key={i}>
//             <div className='flex justify-between gap-2 space-y-2'>
//             <div>
//     <h1>{val} </h1>
// </div>

// <div>
//   <input type='number' 
//   value={value}
//   name={`value${i}`}
//   onChange={(e)=>setValue([e.target.name]=e.target.value)}
//    className='outline-none border bg-gray-50 px-2 py-1 focus:outline-blue-500 rounded-lg' ></input>
// </div>

// <div>
//     <h1>= {val*value}</h1>
// </div>
//    </div>
//           </Fragment>
//         )
//     })
// }
      
//         </div>

//         </div>
//     </DefaultLayout>
//   </>
//   )
// }

// export default MoneyCount



import React, { Fragment, useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';


const MoneyCount = () => {
    const money = [10, 50, 100, 500, 1000, 2000];
    const [values, setValues] = useState({});

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
       
    };
  // Calculate the total money
  const totalMoney = money.reduce((total, val, i) => {
    const inputValue = values[`value${i}`] || 0;
    return total + val * (inputValue ? Number(inputValue) : 0);
}, 0);
    return (
        <>
            <DefaultLayout>
                <div className='container mx-auto'>
                    <div className='shadow-lg bg-white px-1 border max-w-[900px] mx-auto py-3 sm:px-6 sm:py-4'>
                        {
                            money.map((val, i) => {
                                const inputValue = values[`value${i}`] || ''; // Get the value or default to an empty string
                           
                                return (
                                    <Fragment key={i}>
                                        <div className='flex justify-between gap-2 space-y-2'>
                                            <div>
                                                <h1>{val} </h1>
                                            </div>
                                            <div>
                                                <input
                                                    type='number'
                                                    value={inputValue}
                                                    name={`value${i}`}
                                                    min={0}
                                                    onChange={(e) => handleInputChange(e, i)}
                                                    className='outline-none border bg-gray-50 px-2 py-1 focus:outline-blue-500 rounded-lg'
                                                />
                                            </div>
                                            <div>
                                                <h1>= {val * (inputValue ? Number(inputValue) : 0)}</h1>
                                            </div>
                                        </div>
                                    </Fragment>
                                );
                            })
                        }
                        <div className='my-4 flex justify-end mx-3'>
<h1>Total Money = {totalMoney}</h1>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
};

export default MoneyCount;
