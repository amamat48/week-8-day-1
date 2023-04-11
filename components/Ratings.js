import { useState } from "react";

export default function Ratings() {

    const [rating, setRating] = useState(4.6);

    const calculateAvgRating = (event) => {
        let userRating = event.target.value
        let averageCalculated = (rating + Number(userRating)) / 2
        let average = averageCalculated.toFixed(1)
        setRating(average)
    }



    return (

        <div className='ratings'>
            <h2>Ratings</h2>
            <p>{rating}</p>
            <label>
                Leave a rating (1-5)
                <input type='number' min='1' max='5' onChange={calculateAvgRating} placeholder='5' />
            </label>
        </div>

    )
}