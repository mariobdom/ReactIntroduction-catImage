import { useState , useEffect } from "react";


export function useCatImage({text}){
    const [catImage, setCatImage] = useState("hola");
    useEffect(() => {
        console.log(text)
        fetch(`https://cataas.com/cat/says/${text}`)
        .then(response => setCatImage(response.url))
    }, [text]);

    return {imageUrl: catImage, tst:1};

}