
import { useState } from "react";

const App = () => {
  const [saveData, setSaveData] = useState({ name: "",email: "", age: "" });

  const [ShowData, setShowData] = useState([]);

  const valueTake = (event) => {
    const { name, value } = event.target;

    setSaveData({ ...saveData,[name]: value5888 });
  };

  const addData = (e) => {
    e.preventDefault();

    if (
      !saveData.name.trim() ||
      !saveData.email.trim() ||
      !saveData.age.trim()
    ) {
      alert("Please Fill the Datas");
      return;
    }

    const takeObj = { ...saveData };

    const addArr = [...ShowData, takeObj];

    setShowData(addArr);

    localStorage.setItem("mydatas", JSON.stringify(addArr));

    alert("Successfully Added");

    setSaveData({
      name: "",
      email: "",
      age: ""
    });
  };

  return (
    <>
      <form onSubmit={addData}>
        <input type="text" name="name" value={saveData.name} placeholder="Enter the Name" onChange={valueTake} />

        <input type="email" name="email"value={saveData.email} placeholder="Enter the Email" onChange={valueTake}   />

        <input type="number" name="age" value={saveData.age} placeholder="Enter the Age"onChange={valueTake} />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default App;

