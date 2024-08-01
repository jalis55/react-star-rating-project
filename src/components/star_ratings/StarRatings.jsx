import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './StarRatings.css'

export default function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handelClick = (getCurrentRating) => {
        setRating(getCurrentRating)
    }
    const handleMouseEnter = (getCurrentRating) => {
        setHover(getCurrentRating)
    }
    const handleMouseLeave = () => {
        setHover(rating)
    }



    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1
                    return (
                        <FaStar
                            key={index}
                            className={index <= (hover || rating) ? "active" : "inactive"}
                            onClick={() => handelClick(index)}
                            onMouseEnter={ ()=>handleMouseEnter(index)}
                            onMouseLeave={ ()=>handleMouseLeave(index) }
                            size={50}
                        />
                    )
                })
            }
        </div>
    );
}