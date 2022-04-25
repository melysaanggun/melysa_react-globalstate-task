import { useState } from "react";
import "./style.css"
/** React Redux */
import { useDispatch } from "react-redux";
/** Actions */
import { addTodo } from "../../store/TodoSplice";

    function AddTodo () {
    
    const [val,setVal] = useState({value: ''})

    const dispatch = useDispatch();

    const onChange = e => {
        setVal({value: e.target.value})
    }
    
    const onClick = () => {
        if (val.value === '') {
            alert('Please insert a new to do list!');
        } else {
            dispatch(addTodo({
                title: val.value,
                completed: false
            }))
        }
    }

        return (
        <div className="form-input">
                <input 
                type="text" 
                placeholder="Add todo..." 
                value={val.value} 
                onChange={(e) => onChange(e)}
                />
                <button type="submit" onClick={onClick} >Submit</button>
        </div>
        ) 
}  

export default AddTodo;