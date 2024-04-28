import React, { useState } from 'react'

const TabBar = () => {
    const [tab ,setTab] = useState(1)
    const changeTab = (num)=>{
     setTab(num)
    }

    const tabs = [
        {
          title: "Tab 1",
          content: <div>This is content for Tab 1</div>
        },
        {
          title: "Tab 2",
          content: <div>This is content for Tab 2</div>
        },
        {
          title: "Tab 3",
          content: <div>This is content for Tab 3</div>
        }
    ]

    const Tab = ({ tabs }) => {
        const [activeTab, setActiveTab] = useState(0);
      
        return (
          <div className="flex flex-col">
            <div className="flex border-b border-gray-200">
            
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`${
                    activeTab === index
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  } py-2 px-4 inline-block hover:bg-green-700 hover:text-white focus:outline-none`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="py-4 my0 textsm">
              {tabs[activeTab].content}
            </div>
          </div>
        );
      };
   
  return (
   <>
<div className='max-w-[600px] mx-auto mt-10 border[1px]'>

   <div className='flex justify-center gap-6'>
   <button 
   onClick={()=>changeTab(1)}
   className={`${tab===1 ?"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded":"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}`}>
  Button 1
</button>
<button 
   onClick={()=>changeTab(2)}
   className={`${tab===2 ?"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded":"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}`}>
  Button 2
</button>
<button 
   onClick={()=>changeTab(3)}
   className={`${tab===3 ?"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded":"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}`}>
  Button 3
</button>
   </div>
</div>

   <div className='max-w-[600px] mx-auto mt-10 border-[1px] p-6'>
   {(tab ===1)&&
    <div>
<h1>First Contant</h1>
    </div>
   }
   {(tab ===2)&&
    <div>
<h1>Second  Contant</h1>
    </div>
   }

   {(tab ===3)&&
    <div>
<h1>Thrid Contant</h1>
    </div>
   }

    </div>


    <div className="container mx-auto mt-4">
      <Tab tabs={tabs} />
    </div>





  

     
 

   

   </>



  )
}

export default TabBar