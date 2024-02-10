import { useState } from "react";
import data from './data';
import './styles.css';

const Accordion = () => {
    const [selected, setSelected] = useState(null);

    const handleSelection = (getCurrentId) => {
        console.log(getCurrentId);
        if(getCurrentId === selected){
            setSelected(null);
        }else{
            setSelected(getCurrentId);
        }
    }

    return <div className="wrapper">
        <div className="accordion">
            {
                data && data.length > 0 ? 
                data.map(dataItem => <div className="item">
                    <div className="title" onClick={() => handleSelection(dataItem.id)}>
                        <h3>
                            {dataItem.name}
                         </h3>
                         <span>
                            +
                         </span>
                    </div>
                    <div className="description">
                        {
                            selected === dataItem.id ? 
                            (<div>
                                {dataItem.description}
                            </div>) : null
                            
                        }
                    </div>
                </div>)
                : <div>No Data present</div>
            }
        </div>
    </div>
}

export default Accordion;