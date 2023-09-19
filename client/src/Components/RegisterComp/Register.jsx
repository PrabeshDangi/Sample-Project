import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import registerBgImage from "../../assets/img/registerBG.jpg";
function Register() {
  const navigate = useNavigate();

  // const handleSubmit = async () => {
  //   const { data } = await axios.post(
  //     `${process.env.REACT_APP_API_URL}/register`,
  //     {
  //       role,
  //       name,
  //       email,
  //       password,
  //     }
  //   );
  // }

  // const [selectedOption, setSelectedOption] = useState(''); // Initialize the state to store the selected option

  // const SendData = (e) => {
  //   e.preventDefault(); // Prevent the default form submission behavior
  //   console.log('Selected Option:', selectedOption);
  // };

  const handleProducer = (ev) => {
    navigate("/producer");
  };

  const handleConsumer = (e) => {
    navigate("/consumer");
  };

  // const handleRadioChange = (e) => {
  //   setSelectedOption(e.target.value); // Update the state when a radio button is clicked
  // };

  // const render = ()=>{
  //   if(selectedOption === "Producer")
  //       return <Producer name={name} email={email} password={password} setName={setName} setEmail={setEmail} setPassword={setPassword} />
  //   else if(selectedOption === "Consumer")
  //      return <Consumer name={name} email={email} password={password} setName={setName} setEmail={setEmail} setPassword={setPassword} />
  // }
  return (
    <div className="registerSection">
      <h1>Please select one of the options below:</h1>
      {/* <form onSubmit={SendData}> */}

      <div className="roleSelector">
        <div>
          <input style={{padding:"0"}}
            type="radio"
            name="option-register"
            value="Producer"
            id="producerOption"
            onChange={handleProducer} // Call the function when a radio button is clicked
          />
          <label htmlFor="producerOption">Producer</label>
        </div>

        <div>
          <input
            type="radio"
            name="option-register"
            value="Consumer"
            id="consumerOption"
            onChange={handleConsumer} // Call the function when a radio button is clicked
          />
          <label htmlFor="consumerOption">Consumer</label>
        </div>
      </div>

      {/* </form> */}
      {/* {
    render()
} */}
    </div>
  );
}

export default Register;
