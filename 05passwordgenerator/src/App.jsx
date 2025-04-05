import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const passwordRef = useRef(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">🔑 Password Generator</h1>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
        {/* Password Display */}
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white outline-none text-lg tracking-wide"
          />
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg text-white font-semibold transition"
            onClick={() => {
              window.navigator.clipboard.writeText(password);
              passwordRef.current?.select();
            }}
          >
            📋 Copy
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-col space-y-4">
          {/* Length Slider */}
          <div className="flex justify-between items-center">
            <label className="text-lg font-medium">Length:</label>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer w-2/3 accent-blue-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <span className="text-lg font-semibold bg-gray-700 px-3 py-1 rounded-md">
              {length}
            </span>
          </div>

          {/* Checkbox Options */}
          <div className="flex justify-between items-center">
            <label className="text-lg">Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="w-6 h-6 accent-blue-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="text-lg">Include Symbols</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="w-6 h-6 accent-blue-500"
            />
          </div>
        </div>

        {/* Regenerate Button */}
        <button
          onClick={generatePassword}
          className="mt-6 w-full py-3 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-lg text-lg font-semibold transition"
        >
          🔄 Generate New Password
        </button>
      </div>
    </div>
  );
}

export default App;
