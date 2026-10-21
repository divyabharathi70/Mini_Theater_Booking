import React, { useEffect, useState } from 'react'

const DemoSerch = () => {
      const [data,setData] = useState([])
        const [search,setSerach] = useState("")


      const getData = async()=>{
      
          const datas = await fetch("https://dummyjson.com/users")
      
          const userList = await datas.json()
      
          //console.log(userList.users);
          setData(userList.users)
      
        }
      
        useEffect(()=>{
          getData()
        },[])

        const handleSearch=(e)=>{
            setSerach(e.target.value)
            
        }

        let produc =[...data]

        if(search){
   produc = produc.filter((e)=>e.firstName.toLowerCase().includes(search.toLowerCase()))

        }



    


  return (
<>

  <label htmlFor="serach">Search</label>
 <input type="text"  id="serach" onChange={handleSearch} className="bg-white border h-10 mx-4 my-3 rounded w-60" />


<div>
  {produc.map((e)=>(
    <div key={e.id}>
        <h1>{e.firstName}</h1>

    </div>
  ))}

</div>
</>  )
}

export default DemoSerch