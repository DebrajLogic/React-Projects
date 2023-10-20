import { useEffect, useState } from "react";
import { InputBox, Button } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState();
  const [tax, setTax] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState();

  const data = useCurrencyInfo(from);

  // const options = ["usd", "inr"];
  const options = data && Object.keys(data);

  // TODO: to delete later
  console.log("data = ", data);
  console.log("tax = ", tax);

  const swap = () => {
    setFrom(to);
    setTo(from);
    console.log("Changed From", from);
    console.log("Changed To", to);
  };

  const convert = () => {
    setConvertedAmount((amount * data[to] * (1 + tax / 100)).toFixed(2));
    console.log("conversion factor = ", data[to]);
  };

  // TODO: Just keep the convert functionality and tax dependency
  useEffect(() => {
    console.log();
    console.log("From:", from);
    console.log("To:", to);
    console.log();
  }, [to, from]);

  return (
    <div className={`w-full h-screen bg-hero-pattern bg-center bg-contain`}>
      <h1 className="bg-green-600 px-4 py-2 rounded-xl text-center text-white text-2xl">
        Currency Convertor
      </h1>
      <div className="h-96 flex justify-center place-items-center mt-10">
        <div className="border-2 border-white mx-4 my-2 p-4 rounded-lg backdrop-filter backdrop-blur-md bg-transparent hover:duration-200 hover:shadow-xl hover:shadow-green-500 hover:cursor-pointer">
          <InputBox
            label="From"
            value={amount}
            currencySelected={from}
            options={options}
            onCurrencyChange={(e) => {
              setFrom(e.target.value);
              setConvertedAmount("");
            }}
            onAmountChange={(e) => {
              setAmount(Number(parseFloat(e.target.value)));
            }}
          />

          <div className="flex justify-between">
            <span className="text-white">
              Rate: {data && data[to].toFixed(2)}
            </span>
            <Button handleClick={swap} label="swap" className="" />
            <span className="text-white">
              With{" "}
              <select
                onChange={(e) => {
                  setTax(Number(e.target.value));
                }}
                className="text-black py-1 mr-1 rounded-3xl outline-none"
                name=""
                id=""
              >
                <option value="0">No</option>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="13">13%</option>
                <option value="15">15%</option>
                <option value="18">18%</option>
                <option value="20">20%</option>
              </select>
              tax
            </span>
          </div>
          <InputBox
            label="To"
            value={convertedAmount}
            currencySelected={to}
            options={options}
            disabled
            onCurrencyChange={(e) => {
              setTo(e.target.value);
              setConvertedAmount("");
            }}
          />
          <div className="flex justify-center">
            <Button
              handleClick={convert}
              label={`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
