import { useState } from "react";
import data from './data';
import './styles.css';

const Accordion = () => {
    const [selected, setSelected] = useState([0,0,0]);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [singleSelectedItem, setSingleSelectedItem] = useState(null);

    const handleSelection = (getCurrentId) => {
        console.log(getCurrentId);
        if(enableMultiSelect){
            console.log('Multislection enabled');
            if(selected[getCurrentId] === 1){
                let updatedSelected = [...selected];
                updatedSelected[getCurrentId] = 0
                setSelected(updatedSelected);
            }else{
                let updatedSelected = [...selected];
                updatedSelected[getCurrentId] = 1
                setSelected(updatedSelected);
            }
        }else{
            console.log('Multislection disabled');
            setSingleSelectedItem(getCurrentId === singleSelectedItem ? null : getCurrentId);
        }
        
    }

    return <div className="wrapper">
        <button type="button" onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
            {enableMultiSelect ?  <span>Enable Single Selection</span> : <span>Enable Multi-selection</span>}
        </button>
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
                            enableMultiSelect ?
                            selected[dataItem.id] === 1 ? 
                            (<div>
                                {dataItem.description}
                            </div>) : null
                            : singleSelectedItem === dataItem.id ? 
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