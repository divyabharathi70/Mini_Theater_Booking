// import { useEffect, useState } from "react"


// const App = () => {

//   const [data,setData] = useState([])
//   const [search,setSerach] = useState("")
//   const [city,setCity] = useState("")
//   const [sort,setSort] = useState("")
//   const getData = async()=>{

//     const datas = await fetch("https://dummyjson.com/users")

//     const userList = await datas.json()

//     //console.log(userList.users);
//     setData(userList.users)

//   }

//   useEffect(()=>{
//     getData()
//   },[])

//   const handleSearch = (e)=>{

//      setSerach(e.target.value)

//   }

//   let Products = [...data]

//   if(search) {

//     Products = Products.filter((e)=>e.firstName.toLowerCase().includes(search.toLowerCase()))

//   }

//   const getCitis = data.map((e)=>e.address.city)

//   console.log(getCitis);

//   const duplicate = [...new Set(getCitis)]
  
//   console.log(duplicate);
  

//   const handleCity = (e)=>{

//     setCity(e.target.value)

//     console.log(city);
    

//   }



//   if(city){

//     Products = Products.filter((e,i)=>e.address.city == city)

    
    

//   }

// const handlesort = (e)=>{

//   setSort(e.target.value)

// }


// if (sort == "low"){

//   Products = Products.sort((a,b)=>a.age-b.age)

// }

// if(sort=="high"){

//   Products = Products.sort((a,b)=>b.age-a.age)

// }



//   return (
//     <>
//     <div className="bg-amber-200 h-screen p-10">

//        <div className="bg-green-300 p-2 h-20 ">
//           <label htmlFor="serach">Search</label>
//           <input type="text"  id="serach" onChange={handleSearch} className="bg-white border h-10 mx-4 my-3 rounded w-60" />

//            <label htmlFor="city">Choose city</label>
//           <select value={city} id="city" onChange={handleCity} className="bg-white border h-10 mx-4 my-3 rounded w-60">
//            <option>Select City..</option> 
           

//            {duplicate.map((e,i)=>(

//               <option key={i+1} value={e}>{e}</option>

//            ))}
     
//           </select> 


//           <label htmlFor="sort">Choose Sort</label>
//           <select value={sort} id="sort" onChange={handlesort} className="bg-white border h-10 mx-4 my-3 rounded w-80">
//            <option>Select One..</option> 
//            <option value="low">Low</option>
//            <option value="high">High</option>
//           </select> 
//       </div>
      
     
       
//       <div className="bg-black p-5 h-200 rounded flex justify-center items-center gap-5 flex-wrap">
//         {Products.map((e)=>(

//           <div key={e.id} className="bg-white w-50 p-2 rounded">
//              <h3>{e.firstName}</h3>
//              <p>{e.age}</p>
//              <p>{e.address.city}</p>
//              <button className="bg-black text-white p-1 w-45 rounded my-2">Details</button>
//           </div>

//         ))}
//       </div>
//     </div>
//     </>
//   )
// }

// export default App


import React from 'react'
import DemoSerch from './DemoSerch'

const App = () => {
  return (
<>
<DemoSerch/>
</>  )
}

export default App