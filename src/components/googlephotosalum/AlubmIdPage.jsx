import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import { RxCross2 } from 'react-icons/rx';

const AlubmIdPage = () => {
    const [data1, setData1] = useState({})
const [modal, setModal] = useState(false)
    const [getData, setGetData] = useState({})
     const {id} =useParams()
    useEffect(() => {
        const getPhoto = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = await res.json()

            // Group photos by albumId
            const groupedData = data.reduce((acc, photo) => {
                const { albumId } = photo;
                if (!acc[albumId]) {
                    acc[albumId] = [];
                }
                acc[albumId].push(photo);
                return acc;
            }, {});

            setData1(groupedData);
        }
        getPhoto();
    }, []);
    const openModal=(i,photo)=>{
        setModal(true)
        setGetData(photo)
console.log(photo.id)
console.log(photo.thumbnailUrl)
    }
  return (
   <>
<DefaultLayout>
<div className='container mx-auto'>

<div className="photos grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                 {data1[id]?.map((photo,i) => 
                 {
                    return(
<div key={photo.id} onClick={()=>openModal(i,photo)} className='cursor-pointer'>
<h1 className='my-2'>AlubmId: {photo.albumId}</h1>
<img  src={photo.thumbnailUrl} alt={photo.title} />
</div>
                  )
                 }
                            )}
  </div>

  {
    (modal)&&
    <div className='fixed inset-0 bg-opacity-50 bg-gray-800/90 w-full top0 left0 z30 min-hscreen flex justify-center items-center'>
<div className='bg-white p4  w-[400px] relative'>
<button
          onClick={()=>setModal(false)}
          className=" bg-white absolute top-0 right-0 text-red-500 hover:text-gray-700 w-ful"
        >
          <RxCross2 size={30}/>
        </button>
        <h1 className='bg-white p-3 absolute top-0'> Id :{getData.id}</h1>
        <img className='w-full'  src={getData.thumbnailUrl} alt={getData.title} />
</div>
  </div>
  }

</div>
</DefaultLayout>
   </>
  )
}

export default AlubmIdPage