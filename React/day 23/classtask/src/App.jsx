import React, { useEffect, useState } from 'react'

const App = () => {

const [datas,setDatas] = useState([])
const [search,setSearch] = useState("")

const getdata = async()=>{

  const take = await fetch ("https://dummyjson.com/products")

const change = await take.json() ;


 setDatas(change.products)
}

useEffect(()=>{
 getdata()

},[])

 const handleSeacrch = (e)=>{

e.preventDefault()  
setSearch(e.target.value)

 }




if(search){
 
  

}



  return (
<>

<input type="text" placeholder='search'  onChange={handleSeacrch}/>

{datas.map((e)=>(

   <div key={e.id} >
            <h1>{e.title}</h1>

</div>

))}


</>  )
}

export default App