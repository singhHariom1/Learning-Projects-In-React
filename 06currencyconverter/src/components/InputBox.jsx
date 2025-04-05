import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();

  return (
    <div
      className={`bg-white p-4 rounded-lg text-sm flex items-center justify-between shadow-md transition-transform transform hover:scale-105 ${className}`}
    >
      <div className="w-2/3">
        <label
          htmlFor={id}
          className="text-gray-600 font-semibold mb-1 inline-block"
        >
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent py-2 text-lg font-semibold text-gray-700 placeholder-gray-400 border-b-2 border-gray-300 focus:border-blue-500 transition-all"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount || ""}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value) || 0)
          }
        />
      </div>
      <div className="w-1/3 flex flex-wrap justify-end text-right">
        <p className="text-gray-600 text-sm font-semibold mb-1">Currency</p>
        <select
          className="rounded-lg px-3 py-2 bg-gray-100 text-gray-800 font-semibold cursor-pointer outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
