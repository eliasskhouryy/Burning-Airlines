import {Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Burning Airlines</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> | {" "}
        <Link to="/Airplanes">Airplanes</Link> | {" "}
        <Link to="/Flights">Flights</Link> | {" "}
        <Link to="/Search">Search</Link> | {" "}
        <Link to="/Reservations">Reservations</Link> 

      </nav>
      <Outlet/>
    </div>
  );
}

export default App;