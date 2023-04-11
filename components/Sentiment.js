import { useState } from "react";


export default function Sentiment() {

const [reviews, setReviews]= useState([
    {id: 1, name: "Positive Reviews", number: 900},
    {id: 2, name: "Neutral Reviews", number: 121},
    {id: 3, name: "Negative Reviews", number: 321},
])




    return(
        <div className="sentiment">

            {reviews.map(item =>{
                return(
                <p key={item.id}>
                    {item.name}: {item.number}
                </p>
                )

            })}
        </div>
    )
}