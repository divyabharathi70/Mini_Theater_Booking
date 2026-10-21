import React, { useRef } from 'react'
import Scrool from './component/scrool'
import Count from './component/Count'
import Timer from './component/Timer'

const App = () => {
const data = useRef(null)

const handleon =()=>{
       data.current .style.backgroundColor="green"

     data.current.style.color="red"
   data.current .innerHTML ="WELCOME TO GOKUL AND HARISH PAGE"


}

  return (

<>
<h2 ref={data}>

</h2>
<button onClick={handleon}>click view</button>


<Scrool/>
<Count/>
<Timer/>
</>
  )
}

export default App