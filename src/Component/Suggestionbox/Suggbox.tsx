
import React from "react";
import './Suggbox.css'

import { useEffect, useState } from "react";

interface Datatype {
    image: string;
    title: string;
    category: string;

}
function Suggbox() {

    const intialState = {
        image: "",
        title: "",
        category: ""
    }
    var url = "https://fakestoreapi.com/products/category/women's clothing/?limit=4";
    const [Data, setData] = useState<Datatype[]>([intialState]);
    const fetchData = () => {

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setData(data);
            });

    }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            {
                Data.length === 1 ? <h1 className="Loading"> Loading......</h1> : <div className="suggbox">

                    <div> <h4> Latest trendes</h4></div>
                    <div className="suggboxCard">
                        {Data && Data.length > 0 && Data.map((element) => {
                            return <div className="contaner">
                                <img src={element.image} className="card-img-top" alt="..." />
                                <div className="suggtitle">{element.title}</div>
                            </div>

                        })}
                    </div>

                    <div> <h1 > Papuler suggestion</h1></div>
                    <ul>
                        {Data && Data.length > 0 && Data.map((element) => {
                            return <div className="contaner">
                                <div className="suggcatgory">{element.category}</div>
                            </div>

                        })}

                    </ul>

                </div>}

        </>
    );
}



export default Suggbox