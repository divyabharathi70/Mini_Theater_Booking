import React from 'react'

const Home = () => {


const arr =[
{name:"gokul",age:22,course:"react"},
{name:"harish",age:23,course:"node"},

{name:"lokesh",age:20,course:"python"},{
    name:"ganesh",age:22,course:"java"
}

]

  return (
    <>
    
    <div  className='bg-gray-400 h-100  text-2xl flex gap-10 flex-col items-center justify-center text-center'>
        
<h1>details</h1>


<div className='flex  gap-15 ' >
 {arr.map((e,i)=>(
<div key={i+1}  className='bg-black text-white p-5   text-2xl flex  flex-col '>
<p>{e.name}</p>
<p>{e.age}</p>

<p>{e.course}</p>


</div>

 ))}


</div>


  






    </div>
    
    </>
  )
}

export default Home