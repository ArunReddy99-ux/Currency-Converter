// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [to, setto] = useState("EUR");
  const [from, setFrom] = useState("EUR");
  const [val, setval] = useState(0);
  const [op, setop] = useState("");
  return (
    <div>
      <input type="text" value={val} onChange={(e) => setval(e.target.value)} />
      <select onChange={(e) => setFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setto(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <Conversion val={val} to={to} from={from} setop={setop} />
      <p>{op}</p>
    </div>
  );
}
function Conversion({ val, to, from, setop, setloading }) {
  useEffect(
    function () {
      async function currency() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${val}&from=${from}&to=${to}`
          );
          if (!res.ok) {
            throw new Error("Failed to fetch currency data");
          }
          const data = await res.json();
          const { rates } = data;
          const as = rates[to];

          if (as !== undefined) {
            setop(as);
          } else {
            console.log(`Both the ${to} and ${from} are same :couldnt convert`);
          }
          setop(as);
        } catch (error) {
          console.log("Error fecthing currencty data");
          setop(val);
        }
      }
      currency();
    },
    [val, to, from, setop]
  );
}
