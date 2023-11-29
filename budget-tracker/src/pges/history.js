import React, { useEffect, useState } from "react";
//import OutputtingLists from './outPuttingLists'

const Review = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0)
    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('list'));
        if (list) {
            setList(list)
        }
    }, []);
    const deletingListItem = (index) => {
        setNum(3)
        console.log(num)
        //don't know but yk
    }
    return (
        <div>
            <div id="review-titles">
                <h1>Your history</h1>
                <h1>big money total </h1>
            </div>
            
        </div>
    )
}
export default Review;
/* <OutputtingLists list={list}  deletingListItem={deletingListItem}/> */
