import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from "react";
import {useEffect} from "react";
import InputGroup from "./components/InputGroup";

function App() {

  //Input field components
    const {originAirport, setOriginAirport} = useState('')
    const {destinationAirport, setDestinationAirport} = useState('')
  //bring in airport data
    const {airportData, setAirportData} = useState([])

    const getAirportData = () => {
        fetch('airports.json')
        .then((response) => {return response.json()})
        .then((myData) => {
            console.log(myData)
            setAirportData(myData)
            console.log(airportData)
        })
    }

    useEffect(()=>{
        getAirportData()
    }, []);
  //input field auto-complete?
  //Input field entry results in search
  //map component
  return (

      <>
        <InputGroup
            originAirport = {originAirport}
            setOriginAirport = {setOriginAirport}
            destinationAirport = {destinationAirport}
            setDestinationAirport = {setDestinationAirport}
        />
      </>
  );
}

export default App;
