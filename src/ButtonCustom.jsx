import { useState } from "react";
 import { useEffect } from "react";


export function ButtonCustom(props){

    let [counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log("Effect")
        console.log(counter)
    }, [])

    const onClickButton = () =>{
        setCounter(counter + 1)
    }

    return <button onClick={onClickButton}>{props.text + " " +counter}</button>
}