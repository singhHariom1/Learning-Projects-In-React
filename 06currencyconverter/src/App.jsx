import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, error } = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600 text-lg font-semibold">
        <p>⚠️ Error fetching currency data: {error}</p>
      </div>
    );
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat p-4"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-6 backdrop-blur-lg bg-white/20 shadow-xl">
        <h1 className="text-2xl font-bold text-white text-center mb-4">
          💱 Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-3">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={setFrom}
              onAmountChange={setAmount}
              selectedCurrency={from}
            />
          </div>

          <div className="relative w-full flex justify-center my-3">
            <button
              type="button"
              className="border-2 border-white rounded-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 transition-transform transform hover:scale-105 shadow-lg"
              onClick={swap}
            >
              🔄 Swap
            </button>
          </div>

          <div className="w-full mb-3">
            <InputBox
              label="To"
              currencyOptions={options}
              amount={convertedAmount}
              onCurrencyChange={setTo}
              selectedCurrency={to}
              amountDisabled
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold text-lg px-4 py-3 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Convert {from.toUpperCase()} ➝ {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
