import Nonprimitive from "./components/Nonprimitive"
import Primitive from "./components/Primitive"


const App = () => {

const string ="gokul"
const number =1000
const isActive =true


const obj={string,number,isActive}

const arr=[1,2,3,4,5,6,7,8]



  return (
<>
<Primitive  send={obj}/>
{/* <Nonprimitive  pass={arr}/> */}


</>
  )
}

export default App