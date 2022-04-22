import './App.css';
import {useEffect, useState} from "react";
import InputGroup from "./components/InputGroup";
import MapDisplay from "./components/MapDisplay";
import "jquery-csv";


function App() {

    const [originAirport, setOriginAirport] = useState('')
    const [destinationAirport, setDestinationAirport] = useState('')
    const [airportData, setAirportData] = useState({})
    const [airportLocations, setAirportLocations] = useState({})
    const [markers, setMarkers] = useState([])
    const [averageDelay, setAverageDelay] = useState(0)

    const getAirportData = () => {
        fetch('airports.json')
        .then((response) => {return response.json()})
        .then((myData) => {
            let revisedAirportData = {}
            Object.keys(myData).forEach(key => {
                revisedAirportData[key.slice(1)] = []
                myData[key].forEach((item) => {
                    let revisedItemData = [item[0].slice(1), item[1]]
                    revisedAirportData[key.slice(1)].push(revisedItemData)
                })
            });
            console.log(revisedAirportData)
            setAirportData(() => {
                return revisedAirportData
            })
        })

        fetch('us-airports.json', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then((response) => {return response.json()})
            .then((myData) => {
                console.log(myData)
                setAirportLocations(myData)
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
            airportData = {airportData}
            airportLocations = {airportLocations}
            setMarkers = {setMarkers}
            markers = {markers}
            setAverageDelay = {setAverageDelay}
        />
        <MapDisplay
            markers = {markers}
            averageDelay = {averageDelay}
        />
      </>
  );
}

export default App;
