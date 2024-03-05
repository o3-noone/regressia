import React, { useState } from "react";

const Integratsia = () => {
  const [n, setN] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value; 
    setN(value); 
  };

  const toBinary = (num) => {
    return Number(num).toString(2); 
  };

  const toDecimal = (bin) => {
    return parseInt(bin, 2); 
  };

  const [decimal, setDecimal] = useState(""); 

  const handleInputChange2 = (e) => {
    const value = e.target.value;
    setDecimal(value); 
  };

  const f = [3, 5, 9, 12, 18, 22, 15, 46, 564, 573];

  const g = [];
  const h = [];
  f.forEach((num) => {
    if (num % 2 === 0) {
      g.push(num);
    } else {
      h.push(num);
    }
  });
  return (
    <div className="container">
      <div className="containerBox">
        <div>
       <p> Иккилик бутун сон кўринишдаги сатр берилган. Ўнлик кўринишдаги сатр шакллантирилсин ва экранга чиқарилсин.</p> <br />
          <p>binarga aylantirish</p>
          <input type="number" value={n} onChange={handleInputChange} />
          <p>songa aylantirish</p>
          <input type="number" value={decimal} onChange={handleInputChange2} />
          <div className="natija2">
            Binar natija: {toBinary(n)} <br />
            Son natija: {toDecimal(decimal)}
          </div>
        </div>
      </div>
      <div className="natija">
        <p>Komponentalari butun son bo'lgan f fayl berilgan, g faylga barcha juft qiymatlarni h fayla barcha toq qiymatlarni joylash</p> <br />

        <p>
          Kirtilgan sonlar: {f.join(', ')}
        </p>
        <p>Juft sonlar: {g.join(', ')}</p>
        <p>Toq sonlar: {h.join(', ')}</p>
      </div>
    </div>
  );
};

export default Integratsia;
