import React, { useEffect, useState } from 'react'

const App = () => {

const [datas,setDatas] = useState([])
const [searchTerm, setSearchTerm] = useState('')
const [filteredData, setFilteredData] = useState('')

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


//// SEARCH FUNCTIONALITY

const handleSearch =(e)=>{
e.preventDefault()
setSearchTerm(e.target.value)

}

let product= [...datas]
 if(searchTerm){
  product = product.filter((e)=>e.title.toLowerCase().includes(searchTerm.toLowerCase())),[]
}
// filtering the category from the data dupilcate valu remove
const getCategory = datas.map((e)=>e.category)
 
// console.log(getCategory)

const dupicate = [...new Set(getCategory)]

// filter State
 const handleFilter=(e)=>{
  setFilteredData(e.target.value)
 }

 if(filteredData){
  product = product.filter((e)=>e.category===filteredData)
 }

  return (
    
    <>
     <div className='bg-black text-white p-5 flex flex-col items-center justify-center text-center '>
      <form >
      <label className='bg-gray-800 text-white p-3 rounded-2xl'>Search</label>
      <input type="text" onChange={handleSearch} placeholder='Search' className='bg-white border-2 text-black border-black p-2 m-2 rounded-lg'/> 
          <label className='bg-gray-800 text-white p-3 rounded-2xl'>category</label>
          <select className='bg-white border-2 text-black border-black p-2 m-2 w-50 rounded-lg' onChange={handleFilter}>
           < option value="city1" >category</option>

           {dupicate.map((e,i)=>(
            <option key={i+1} value={e}>{e}</option>
           ))}
           
          </select>
      </form>
     </div>
     <div className='bg-amber-400 text-black p-5 flex flex-col items-center justify-center text-center '>
       {product.map((e)=>(
        
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