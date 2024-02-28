import  { useState, useEffect } from 'react';


function ColorChangingComponent() {
  const [backgroundColor, setBackgroundColor] = useState(
    localStorage.getItem('backgroundColor') || '#FFFFFF'
  );
  const [intervalId, setIntervalId] = useState(null);

  const colorCodeLt = 'abcdefABCDEF';
  const colorCodeNm = '0123456789';

  const startChangeColor = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        let colorCode = '#';
        for (let i = 0; i < 3; i++) {
          colorCode +=
            colorCodeNm[Math.floor(Math.random() * 10)] +
            colorCodeLt[Math.floor(Math.random() * 16)];
        }
        localStorage.setItem('backgroundColor', colorCode);
        setBackgroundColor(colorCode);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopChangeColor = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <div className="container">
      <h1>Unlimited Colors</h1>
      <div className="wrapper">
        <button className="btn" id="start" onClick={startChangeColor}>
          Start
        </button>
        <button className="btn" id="stop" onClick={stopChangeColor}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default ColorChangingComponent;
