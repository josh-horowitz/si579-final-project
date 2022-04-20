

const InputGroup = (props) => {
    const {originAirport} = props;
    const {setOriginAirport} = props;
    const {destinationAirport} = props;
    const {setDestinationAirport} = props;

    return (
        <div className="row">
            <div className="input-group col">
                <label>Airport Origin: </label>
                <input
                    value={originAirport}
                    type="text"
                    className="form-control"
                    placeholder="Origin"
                    onChange={(e) => setOriginAirport(e.target.value)}/>
                <label>Airport Destination: </label>
                <input
                    value={destinationAirport}
                    type="text"
                    className="form-control"
                    placeholder="Destination"
                    onChange={(e) => setDestinationAirport(e.target.value)}/>
            {/*The below button will search for the airport info in the airport list and set the map    */}
            </div>
        </div>
    )
}

export default InputGroup;