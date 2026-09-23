import React from 'react'

const Navbar = () => {
  return (
    <>
      

     <div className='par'>

      <div className='-translate-x-35'>
        <h1>LOGO</h1>
      </div>

      <Link/>

      <Button/>



     </div>


    
    
    </>
  )
}

export default Navbar



const Link=()=>{

  return (
    <>
      

      <div className='flex gap-5'>
        <a href="http://">home</a>
                <a href="http://">comtact</a>

        <a href="http://">about</a>

        <a href="http://">help</a>

      </div>


    
    
    </>
  )


}


const Button=()=>{

  return (
    <>
      

      <div className='bg-amber-700 text-amber-50 rounded-2xl p-2 translate-x-35'>
        <button>Click me</button>
      </div>


     
    
    </>
  )


}