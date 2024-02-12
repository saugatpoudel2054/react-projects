import { useState } from "react";
import data from './data';
import './styles.css';

const Accordion = () => {
    const [selected, setSelected] = useState([]);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [singleSelectedItem, setSingleSelectedItem] = useState(null);

    const handleSelection = (getCurrentId) => {
        console.log(getCurrentId);
        if(enableMultiSelect){
            let updatedSelected = [...selected];
            let index = updatedSelected.indexOf(getCurrentId);
            console.log(index);
            if(index === -1){
                updatedSelected.push(getCurrentId);
            }else{
                updatedSelected.splice(index, 1);
            }
            console.log(updatedSelected);
            setSelected(updatedSelected);
        }else{
            setSingleSelectedItem(getCurrentId === singleSelectedItem ? null : getCurrentId);
        }
        
    }

    const resetSelection = () => {
        setEnableMultiSelect(!enableMultiSelect);
        setSelected([]);
        setSingleSelectedItem(null);
    }

    return <div className="wrapper">
        <button type="button" onClick={() => resetSelection()}>
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
                            singleSelectedItem === dataItem.id || selected.indexOf(dataItem.id) !== -1
                             ? 
                            (<div>
                                {dataItem.description}
                            </div>) 
                            : null
                            
                        }
                    </div>
                </div>)
                : <div>No Data present</div>
            }
        </div>
    </div>
}

export default Accordion;