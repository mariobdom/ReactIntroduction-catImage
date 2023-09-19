
import { useEffect, useState } from "react";
import { useCatImage } from "./hooks/useCatImage";

export function CatComponent(){


    const [text, setText] = useState("")

    const { imageUrl } = useCatImage({text})

    useEffect(()=>{
        console.log(imageUrl)
    },[imageUrl])









    return (
        <>
            <img src={imageUrl}></img>
            <h1> hola! </h1>
            <button /* onClick={getCat} */> otro! </button>
            <input onChange={(e)=>{setText(e.target.value)}}></input>

        </>

    )
}