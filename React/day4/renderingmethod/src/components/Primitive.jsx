
const Primitive = (props) => {

console.log(props);


  return (
    <>
    <div>
      <h1> {props.send.string} </h1>
      <h1> {props.number} </h1>
      <p> {props.isActive ? "Gokul" : "Harish"} </p>
        
    </div>
    </>
  )
}

export default Primitive