import { useEffect, useState } from "react";
import { GifItem } from "./Gifltem";  

import { useFetchGifs } from "../hooks/useFetchGifs.js";

export const GifGrid = ({ category }) => {   

    const {images, isLoading} = useFetchGifs(category);
    console.log({images,isLoading});

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading &&( <h2> Cargando....</h2>)
            }
            <div className="card-grid">
                {
                    images.map(({ id, title, url }) => (
                        <GifItem 
                            key={id}
                            title={title}
                            url={url}
                        />
                    ))
                }
            </div>
        </>
    )
}
