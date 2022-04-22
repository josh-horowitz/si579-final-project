import "./InputGroup.css";

const InputGroup = (props) => {
    const {originAirport} = props;
    const {setOriginAirport} = props;
    const {destinationAirport} = props;
    const {setDestinationAirport} = props;
    const {airportData} = props;
    const {airportLocations} = props;
    const {setMarkers} = props;
    const {setAverageDelay} = props;

    const searchFlights = () => {
        let latAndLong = [];
        latAndLong.push(airportLocations["K" + originAirport.toUpperCase()])
        airportData[originAirport.toUpperCase()].forEach((item) => {
            if(item[0] === destinationAirport.toUpperCase()){
                // console.log([originAirport.toUpperCase(), destinationAirport.toUpperCase(), item[1]])
                // console.log(airportLocations["K"+originAirport.toUpperCase()], airportLocations["K"+destinationAirport.toUpperCase()])
                latAndLong.push(airportLocations["K"+item[0]])
                setAverageDelay(() => item[1])
            }
        })
        setMarkers(() => {return latAndLong})
    }

    return (
        <div className="input_group">
            <div>
                <label>Airport Origin: </label>
                <input
                    value={originAirport}
                    type="text"
                    className="form-control"
                    placeholder="Origin"
                    onInput={(e) => setOriginAirport(e.target.value)}/>
                <label>Airport Destination: </label>
                <input
                    value={destinationAirport}
                    type="text"
                    className="form-control"
                    placeholder="Destination"
                    onChange={(e) => setDestinationAirport(e.target.value)}/>
                <button
                    id="search"
                    type="button"
                    className="btn btn-primary"
                    onClick={searchFlights}>
                    Find Flights
                </button>
            </div>
        </div>
    )
}

export default InputGroup;