import React, { useState } from "react";
const Regressia = () => {
  const [n, setN] = useState(0); // n sonini saqlash uchun holat
  const [inputs, setInputs] = useState([]); // Input qiymatlarni saqlash uchun holat
  const [sumX, setSumX] = useState(0); // X qiymatlarining yig'indisini saqlash uchun holat
  const [sumY, setSumY] = useState(0); // Y qiymatlarining yig'indisini saqlash uchun holat
  const [sumXY, setSumXY] = useState(0); // X qiymatlarining yig'indisini saqlash uchun holat
  const [sumXX, setSumXX] = useState(0); // Y qiymatlarining yig'indisini saqlash uchun holat
  const handleNChange = (e) => {
    setN(e.target.value);
    // N soni o'zgarishi bilan inputlar ro'yxatini to'ldirish
    const newInputs = [];
    for (let i = 0; i < e.target.value; i++) {
      newInputs.push({ x: "", y: "", xy: "", xx: "" });
    }
    setInputs(newInputs);
  };
  const handleInputChange = (e, index, field) => {
    const newInputs = [...inputs];
    newInputs[index][field] = e.target.value;
    // X va Y kiritilganda X*Y va X*X ni hisoblash
    if (field === "x" || field === "y") {
      newInputs[index].xy = newInputs[index].x * newInputs[index].y;
      newInputs[index].xx = newInputs[index].x * newInputs[index].x;
    }
    setInputs(newInputs);
    // X va Y qiymatlarining yig'indisini hisoblash
    let sumXValues = 0;
    let sumYValues = 0;
    let sumXYValues = 0;
    let sumXXValues = 0;
    newInputs.forEach((input) => {
      sumXValues += parseFloat(input.x) || 0;
      sumYValues += parseFloat(input.y) || 0;
      sumXYValues += parseFloat(input.xy) || 0;
      sumXXValues += parseFloat(input.xx) || 0;
    });
    setSumX(sumXValues);
    setSumY(sumYValues);
    setSumXY(sumXYValues);
    setSumXX(sumXXValues);
  };

  const calculateP = () => {
    const numerator = n * sumXY - sumX * sumY;
    const denominator = n * sumXX - sumX ** 2;
    const P = numerator / denominator;
    return P;
  };
  const calculateB = () => {
    const numerator = sumXY * sumY - sumX * sumXY;
    const denominator = n * sumXY - sumX ** 2;
    const P = numerator / denominator;
    return P;
  };
  const calculateY = () => {
    const num = calculateP() + calculateB();
    return num;
  };
  return (
    <div className="container">
      <div className="containerBox">
        <form action="Regressia" className="Regressia">
          <p for="inpN">n soni</p>
          <input
            type="number"
            placeholder="n soni"
            value={n}
            onChange={handleNChange}
          />
          <div className="inputBox">
            <table>
              <thead>
                <tr>
                  <th>X</th>
                  <th>Y</th>
                  <th>X*Y</th>
                  <th>X*X</th>
                </tr>
              </thead>
              <tbody>
                {inputs.map((input, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="number"
                        value={input.x}
                        onChange={(e) => handleInputChange(e, index, "x")}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={input.y}
                        onChange={(e) => handleInputChange(e, index, "y")}
                      />
                    </td>
                    <td>
                      <p>{input.xy}</p>
                    </td>
                    <td>
                      <p>{input.xx}</p>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>
                    <p>{sumX}</p>
                  </td>
                  <td>
                    <p>{sumY}</p>
                  </td>
                  <td>
                    <p>{sumXY}</p>
                  </td>
                  <td>
                    <p>{sumXX}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
      <div className="natija">
        <div>
          <span>
            P={`${n}*${sumXY}-${sumX}*${sumY}/${n}*${sumXY}-${sumXX}`} ={" "}
            {calculateP()}
          </span>
          <p>P={calculateP()}</p>
        </div>
        <div>
          <span>
            B={`${sumXY}*${sumY}-${sumX}*${sumXY}/${n}*${sumXY}-${sumXX}`} ={" "}
            {calculateB()}
          </span>
          <p>B={calculateB()}</p>
        </div>
        <thead>
          <tr>
            <th>P</th>
            <th>B</th>
            <th>Y</th>
          </tr>
        </thead>
        <tr>
          <td>
            <p>{calculateP()}</p>
          </td>
          <td>
            <p>{calculateB()}</p>
          </td>
          <td>
            <p>{calculateY()}</p>
          </td>
        </tr>
      </div>
    </div>
  );
};

export default Regressia;
