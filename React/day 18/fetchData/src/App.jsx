import React, { useEffect, useState } from 'react'

const App = () => {

const [datas,setDatas] = useState([])
const [searchTerm, setSearchTerm] = useState('')

const getdata = async()=>{

  const take = await fetch ("https://dummyjson.com/products")
// console.log(take);

const change = await take.json() ;

 console.log(change)

 setDatas(change.products)
}

useEffect(()=>{
 getdata()

},[])

const handleSearch =(e)=>{
e.preventDefault()
setSearchTerm(e.target.value)
if(searchTerm){
  const filteredData = datas.filter((e)=>e.title.toLowerCase().includes(searchTerm.toLowerCase()))
  console.log(filteredData);
  
}
}



  return (
    
    <>
     <div className='bg-black text-white p-5 flex flex-col items-center justify-center text-center '>
      <form >
      <label className='bg-gray-800 text-white p-3 rounded-2xl'>Search</label>
      <input type="text" onChange={handleSearch} placeholder='Search' className='bg-white border-2 text-black border-black p-2 m-2 rounded-lg'/> 
      
      </form>
     </div>
     <div className='bg-white text-black p-5 flex flex-col items-center justify-center text-center '>
       {datas.map((e)=>(
        
          <div key={e.id} className='bg-gray-600 text-white p-5 flex flex-col gap-3 border-2 m-2 justify-center items-center text-center w-50   '>
            <h1>{e.title}</h1>
            <h1>{e.category}</h1>
            <h1>{e.price}</h1>
            <button className='bg-blue-500 p-2 rounded-lg'>Buy Now</button>
            
          </div>
        
       ))}

       </div>
    
    
    </>
  )
}

export default App