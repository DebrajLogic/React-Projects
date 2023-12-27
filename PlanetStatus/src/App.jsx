import { useState } from "react";
import "./App.css";

function App() {
  const [planetDegrees, setPlanetDegrees] = useState({
    Sun: "",
    Moon: "",
    Mars: "",
    Mercury: "",
    Venus: "",
    Jupiter: "",
    Saturn: "",
    Rahu: "",
    Ketu: "",
  });

  const planetColors = {
    Sun: "Yellow",
    Mars: "Red",
    Saturn: "Brown",
    Ketu: "Black",
    Jupiter: "Orange",
    Mercury: "Green",
    Moon: "White",
    Venus: "Blue",
    Rahu: "Purple",
  };

  const [goodPlanets, setGoogPlanets] = useState([]);
  const [badPlanets, setBadPlanets] = useState([]);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setPlanetDegrees((prevDegrees) => ({
      ...prevDegrees,
      [id]: parseFloat(value) || 0,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const timeIntervals = [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
    const planetGenders = {
      Sun: "Male",
      Moon: "Female",
      Mars: "Male",
      Mercury: "Male",
      Venus: "Female",
      Jupiter: "Male",
      Saturn: "Male",
      Rahu: "Female",
      Ketu: "Male",
    };

    let goodPlanets = [];
    let badPlanets = [];

    Object.entries(planetDegrees).forEach(([planet, minutes]) => {
      for (let i = 0; i < timeIntervals.length - 1; i++) {
        const startTime = timeIntervals[i];
        const endTime = timeIntervals[i + 1];

        if (minutes >= startTime && minutes < endTime) {
          const expectedGender = i % 2 === 0 ? "Male" : "Female";

          if (planetGenders[planet] === expectedGender) {
            goodPlanets.push(planet);
          } else {
            badPlanets.push(planet);
          }

          break;
        }
      }
    });
    setGoogPlanets(goodPlanets);
    setBadPlanets(badPlanets);
    console.log("Good Planets:", goodPlanets);
    console.log("Bad Planets:", badPlanets);
  };

  return (
    <>
      <div className="bg-blue-700 text-white py-4 text-center rounded-lg">
        <h1 className="text-3xl font-bold">Get Planet Status</h1>
      </div>

      <div className="flex justify-between mt-8 mx-4">
        {/* Left Half: Input Form Section */}
        <div className="w-1/2 pr-4">
          <h2 className="text-2xl font-semibold mb-4">Enter Planet Minutes</h2>

          <form onSubmit={handleSubmit} className="max-w-md w-full">
            <table className="w-full mb-4">
              <tbody>
                {Object.entries(planetDegrees).map(([planet, value]) => (
                  <tr key={planet} className="mb-4">
                    <td className="pr-4">
                      <label
                        htmlFor={planet}
                        className="block text-sm font-medium text-gray-700"
                      >
                        {planet.charAt(0).toUpperCase() + planet.slice(1)}:
                      </label>
                    </td>
                    <td>
                      <input
                        type="number"
                        id={planet}
                        name={planet}
                        value={value}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Half: Output Section */}
        <div className="w-1/2 bg-gray-300 font-bold text-center p-4 rounded-lg">
          <h2 className="text-2xl">Bad Planets:</h2>
          {badPlanets.map((planet, index) => (
            <h3
              key={index}
              style={{ color: planetColors[planet] }}
              className="text-2xl"
            >
              {planet}
            </h3>
          ))}
        </div>
      </div>
    </>

    
  );
}

export default App;
