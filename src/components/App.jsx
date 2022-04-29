import React from "react";
import Card from "./card";
import Header from "./header";
import Values from "./values";

function App() {
  return (
    <div className="App">
      <Header 
        count = {Object.keys(Values).length}
      />

      {Values.map((ele) => (
        <Card
          rideId={ele.id}
          originStation={ele.origin_station_code}
          stationPath={ele.station_path}
          date={ele.date}
          distance={ele.destination_station_code}
          city={ele.state}
          state={ele.city}
        />
      ))}
    </div>
  );
}

export default App;
