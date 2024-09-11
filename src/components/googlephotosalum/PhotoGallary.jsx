// import React, { useEffect, useState } from 'react'

// const PhotoGallary = () => {
//     const [data1,setData1] =useState([])
//     console.log(data1)
//     // https://jsonplaceholder.typicode.com/photos
//     useEffect(()=>{
//         const getPhoto =async()=>{
//             const res = await fetch('https://jsonplaceholder.typicode.com/photos')
//             const data = await res.json()
         
//         }
//         getPhoto()
//     },[])
//   return (
//   <>
// <h1 className='mt-12 text-center text-red-600 text-xl '>Google pic</h1>

//   </>
//   )
// }

// export default PhotoGallary


import React, { useEffect, useState } from 'react'
import { CgLayoutGrid } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';

const PhotoGallary = () => {
    const [data1, setData1] = useState({})
    // console.log(data1[2]?.map((val)=>val.thumbnailUrl))
const navigate =useNavigate()
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

    return (
        <>
           <DefaultLayout>
           <div className='container mx-auto'>
           <h1 className='my-5 text-center text-red-600 text-xl '>All Photo Gallary</h1>
            {/* Render grouped data */}
            <div className="photo-gallery flex gap-4 flex-wrap justify-between items-center mb-5">
                {Object.entries(data1).map(([albumId, photos]) => (
              
                    <div
                     key={albumId} 
                     onClick={()=>navigate(`/allphoto/${albumId}`)}
                     className='w-20 h-20 border flex items-center justify-center cursor-pointer bg-green-100'>
                        <h2 >Album {albumId}</h2>
                        {/* <div className="photos">
                            {photos.slice(0,5).map(photo => (
                                <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
                            ))}
                        </div> */}
                    </div>
                ))}
            </div>
            </div>
           </DefaultLayout>
        </>
    )
}

export default PhotoGallary
