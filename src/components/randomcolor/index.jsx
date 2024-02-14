import { useState } from "react";
import './styles.css';

const RandomColor = () => {
    const selection = '0123456789abcdef';
    const [color, setColor] = useState('#fff')
    const generateRandomColor = () => {
        let finalResult = '#';
        for (let index = 0; index < 6; index++) {
            const element = selection[Math.floor(Math.random()*selection.length)];
            finalResult += element;
        }
        setColor(finalResult);
    }

    return <div className="wrapper" style={{background: color}}>
        <button type="button" onClick={() => generateRandomColor()}>
            Generate Random Color
        </button>
        <div className="RandomColor">
            {color}
        </div>
    </div>
}

export default RandomColor;