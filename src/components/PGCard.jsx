import { useState } from "react";

function PGCard({ theme }) {
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumber, setUseNumber] = useState(true);
  const [useSymbol, setUseSymbol] = useState(true);

  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("Your Password Will Appear Here");
  const [copy, setCopy] = useState(false);

  function passwordGenerator(length, useUpper, useLower, useNumber, useSymbol) {
    const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LowerCase = "abcdefghijklmnopqrstuvwxyz";
    const Numbers = "0123456789";
    const Symbols = "!@#$%^&*()_+{}[]<>?/";

    let characters = "";
    if (useUpper) characters += UpperCase;
    if (useLower) characters += LowerCase;
    if (useNumber) characters += Numbers;
    if (useSymbol) characters += Symbols;

    if (!characters.length) return "";

    let pw = "";
    for (let i = 0; i < length; i++) {
      pw += characters[Math.floor(Math.random() * characters.length)];
    }
    return pw;
  }

  const handleGenerate = () => {
    if (!useUpper && !useLower && !useNumber && !useSymbol)
      return setPassword("");
    setPassword(passwordGenerator(length, useUpper, useLower, useNumber, useSymbol));
  };

  const themeBg =
    theme === "light"
      ? "bg-gray-100 text-gray-900"
      : "bg-gray-800 text-gray-200";

  return (
    <section className="w-full mt-5 flex flex-col justify-center items-center font-mono font-bold">
      <div className="w-40 h-40">
        <img src="/pasgif.gif" alt="gif" className="drop-shadow-[0px_6px_20px_rgba(0,102,255,1)]"/>
      </div>
      <div
        className={`w-[90%] md:w-[50%] flex flex-col items-center border rounded-2xl shadow-xl p-5 gap-2 duration-300 ${themeBg}`}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-lime-500 drop-shadow font-extrabold text-center">
          Password Generator
        </h1>

        {/* Options */}
        <div className="w-full flex flex-col gap-3 sm:gap-4">
          {[
            ["Uppercase", useUpper, setUseUpper],
            ["Lowercase", useLower, setUseLower],
            ["Numbers", useNumber, setUseNumber],
            ["Symbols", useSymbol, setUseSymbol],
          ].map(([label, value, setter]) => (
            <label
              key={label}
              className="flex justify-between items-center px-3 py-2 rounded-lg bg-gray-700/10 dark:bg-gray-200/10 backdrop-blur-sm border border-gray-500/20 hover:shadow-md transition text-sm sm:text-base"
            >
              <span>{label}</span>
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => setter(e.target.checked)}
                className="w-4 h-4 sm:w-5 sm:h-5 accent-lime-500 cursor-pointer"
              />
            </label>
          ))}
        </div>

        {/* Length */}
        <div className="w-full flex items-center gap-1">
          <label className="w-full flex justify-center sm:justify-between items-center gap-2">

            <div className="flex items-center gap-1 w-full">

              <span className="font-semibold whitespace-nowrap text-sm sm:text-base">
                Length
              </span>

              <div className="w-full flex items-center gap-0.5">

                {/* Decrease Button */}
                <button
                  onClick={() => setLength((prev) => Math.max(4, prev - 1))}
                  className="h-8 flex justify-center items-center p-1 rounded-md shadow border text-lg font-bold"
                >
                  -
                </button>

                {/* Slider */}
                <input
                  type="range"
                  min="4"
                  max="30"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full h-1 rounded-lg cursor-pointer accent-lime-500"
                />

                {/* Increase Button */}
                <button
                  onClick={() => setLength((prev) => Math.min(30, prev + 1))}
                  className="h-8 flex justify-center items-center p-1 border rounded-md shadow text-lg font-bold"
                >
                  +
                </button>

              </div>
            </div>
          </label>
          <span className="w-12 p-2 bg-lime-600 text-white text-center rounded-lg shadow text-sm sm:text-base">
            {length}
          </span>
          <button
            className="border p-2 rounded-lg bg-lime-600 text-white shadow-md hover:bg-lime-700 hover:shadow-lg transition-all text-sm sm:text-base"
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>

        {/* Output + Copy */}
        <div className="w-full flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 items-center px-2">
          <div className="flex items-center justify-center text-blue-600 rounded-lg p-2 w-full sm:w-[70%] border bg-gray-700/10 dark:bg-gray-200/10 backdrop-blur-sm overflow-hidden break-all text-sm sm:text-lg sm:text-left">
            {password ? (
              <span>
                {password}
              </span>
            ) : (
              <span className="text-red-500">{"Select at least one option"}</span>
            )}
          </div>

          <button
            className="w-full sm:w-[110px] border py-2 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all text-sm sm:text-base"
            onClick={() => {
              if (!password) return;
              navigator.clipboard.writeText(password);
              setCopy(true);
              setTimeout(() => setCopy(false), 3000);
            }}
          >
            {copy ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default PGCard;
