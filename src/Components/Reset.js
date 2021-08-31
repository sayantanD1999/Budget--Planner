import React,{useContext} from 'react'
import { AppContext } from '../Context/AppContext'
function Reset() {

    const {dispatch} = useContext(AppContext);

    const reset=()=>{
        dispatch({
            type:"Reset",
            pauload:1
        });
    }

    return (
        <div id="reset_btn_div">
            <button onClick={reset} className="btn" id="reset_btn" >Reset</button>
        </div>
    )
}

export default Reset
