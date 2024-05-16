import React, { useEffect, useState } from 'react'
 const items = [
    {
        name: 'Prada',
        category: 'Bags',
    },
    {
        name: 'Gucci',
        category: 'Bags',
    },
    {
        name: 'Guess',
        category: 'Bags',
    },
    {
        name: 'Rolex',
        category: 'Watches',
    },
    {
        name: 'Timex',
        category: 'Watches',
    },
    {
        name: 'Nike',
        category: 'Sports',
    },
    {
        name: 'Adidas',
        category: 'Sports',
    },
    {
        name: 'Fila',
        category: 'Sports',
    },
    {
        name: 'Ray Ban',
        category: 'Sunglasses',
    },
    {
        name: 'Aldo',
        category: 'Sunglasses',
    },
    {
        name: 'Polaroid',
        category: 'Sunglasses',
    },
];
const MultifilterCategory = () => {
    const filters = ['Bags', 'Watches', 'Sports', 'Sunglasses'];
    const [filteredData, setFilteredData] = useState(items)
    const [activeFilters, setActiveFilters] = useState([]);
    const filterCate = (category)=>{
        if (activeFilters.includes(category)) {//toggle false
            const filters = activeFilters.filter((el) => el !== category);
            setActiveFilters(filters)
          } else {//
            setActiveFilters([...activeFilters, category]);//toggle true
          }
    }
    // console.log(activeFilters)

   useEffect(()=>{
    if(activeFilters.length)
        {
   const filter = items.filter((val)=>activeFilters.includes(val.category))
   setFilteredData(filter)
    }
    else{
        setFilteredData(items)
    }
   },[activeFilters])
  return (
<>
<div className='container mx-auto'>
<div className='max-w-[1000px] mx-auto'>
<div className='flex justify-center items-center flex-wrap my-5 gap-5'>
{
    filters.map(((val,i)=>{
return(
    <>
    <button 
    key={i}
    onClick={()=>filterCate(val)}
    className={activeFilters.includes(val)?"bg-green-600 text-white px-6 py-2 text-md font-sans font-medium  cursor-pointer border shadow-sm rounded-lg":'px-6 py-2 text-md font-sans font-medium bg-gray-100 cursor-pointer border shadow-sm rounded-lg'}>
{val}
</button>
    </>
)
    }))
}
</div>

<div className='grid  grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 px-2 gap-2 xl:gap-4'>
{
    filteredData.map((val,i)=>{
        return(
            <>
            <div 
            key={i}
            className={'p-4 border text-center shadow-sm rounded-md'}>
<h1 className='my-3'>{val.name}</h1>
<p>{val.category}</p>
</div>
            </>
        )
    })
}
</div>

</div>

</div>
</>
  )
}

export default MultifilterCategory