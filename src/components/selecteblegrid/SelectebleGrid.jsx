import React, { useState,useEffect } from 'react'

const SelectebleGrid = () => {
    const [twoDMatrix, setTwoDMatrix] = useState([]);// 100cells
    const [start, setStart] = useState([]);
    const [end, setEnd] = useState([]); 

    const prepareTwoDMatrix = () => {
const matrix =[];
 for(let i = 0; i <= 9; i++){ //rows
    for (let j = 0; j <= 9; j++){
        const obj = {
            pos: [i, j], // [row,col]
            isColor: false
          }
          matrix.push(obj);
    }

}
setTwoDMatrix(matrix);
    }
    // console.log(twoDMatrix);

    useEffect(()=>{
        prepareTwoDMatrix()
    },[])

    const handleOnDrag = (e, pos) => {
        // console.log('onDrag ', pos);
        setStart(pos);
        prepareTwoDMatrix()
        // prepareTwoDMatrix
      }
    
      const handleOnDragOver = (e, pos) => {
        // console.log('onDragOver ', pos);
        setEnd(pos);

      }

      const fillColor = (startPos, endPos) => {

        let [startRow, startCol] = startPos;
        let [endRow, endCol] = endPos;
        console.log('startPos ', startPos);
        console.log('endPos ', endPos);
    
        const rowStart = Math.min(startRow, endRow); // 5
        const rowEnd = Math.max(startRow, endRow); // 7
        const colStart = Math.min(startCol, endCol); // 5
        const colEnd = Math.max(startCol, endCol); // 7
    
        const selectedGrid = [];
        for (let i = rowStart; i <= rowEnd; i++) {// sub mat rows travers
          for (let j = colStart; j <= colEnd; j++) {//sub mat cols travers
            selectedGrid.push([i, j].join(''));
          }
        }
        let copyMat = [...twoDMatrix];
        copyMat = copyMat.map((item) => {
          const { pos } = item;
          const stringPos = pos.join('');
          if (selectedGrid.includes(stringPos)) {
            item.isColor = true;
          }
          return item;
        });
        setTwoDMatrix(copyMat);
      }
    

      useEffect(() => {
        if (start.length > 1 && end.length > 1) {
          fillColor(start, end)
        }
      }, [start, end])

      const selectColor = ()=>{
        // let obj = {
        //     backgroundColor: "lightblue",
        //     border: "1px solid black"
        // }
        let obj ="bg-green-500 border-2 border-black"
        return obj
      }
      console.log(selectColor())
    
  return (
   <>
    <div className='max-w-[400px] mx-auto mt-12 cursordefault'>
<div className='grid grid-cols-10 cursordefault' >
{
    twoDMatrix?.map((item,i)=>{
        return(
            
            <div 
            key={i}
            draggable
            onDragOver={(e) => handleOnDragOver(e, item.pos)}
            onDrag={(e) => handleOnDrag(e, item.pos)}
        //   style={`${item.isColor &&selectColor()}`}
            className={`${item.isColor && "bg-green-500 border-2 border-red-400"} cursordefault w[33px] h[33px] border border-gray-500 flex justify-center items-center`}>
{item.pos}
</div>
            
        )
    })
}
</div>
    </div>
   </>
  )
}

export default SelectebleGrid