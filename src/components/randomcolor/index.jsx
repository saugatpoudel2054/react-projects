import { useState } from "react";
import './styles.css';

const RandomColor = () => {
    const selection = '0123456789abcdef';
    const [color, setColor] = useState('#fff');
    const [mode, setMode] = useState('hex');

    const generateRandomColor = () => {
        if(mode === 'hex'){
            let finalResult = '#';
            for (let index = 0; index < 6; index++) {
                const element = selection[Math.floor(Math.random()*selection.length)];
                finalResult += element;
            }
            setColor(finalResult);
        }else{
            let finalResult = `rgb(${Math.floor(Math.random()*266)},${Math.floor(Math.random()*266)},${Math.floor(Math.random()*266)})`;
            setColor(finalResult)
        }
        
    }

    const switchMode = () => {
        if(mode === 'hex'){
            setMode('rgb');
        }else{
            setMode('hex');
        }
    }

    return <div className="wrapper" style={{background: color}}>
        <button type="button" onClick={() => generateRandomColor()}>
            Generate Random Color
        </button>
        <button type="button" onClick={() => switchMode()}>
            Hex/RGB Switch
        </button>
        <div className="RandomColor">
            {color}
        </div>
    </div>
}

export default RandomColor;