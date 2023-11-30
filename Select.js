import {useId} from 'react';
import SelectDropdown from 'react-native-select-dropdown';

export const Select=({label,value,onChange,options})=>{
const id=useId();
return(
    <SelectDropdown id={id} value={value} onChange={e=> onChange(e.target.value)}>
        {options.map(option=>(
            <option key={option.value}value={option.value}>
                {option.label}
            </option>
        ))}
    </SelectDropdown>
)};export default Select;