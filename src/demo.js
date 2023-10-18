import React, { useState } from "react";

const Demo = () => {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }

    function decreaseCount() {
        setCount(count - 1);
    }

    function setZero() {
        setCount(0);
    }

    // useEffect(() => {
    //     console.log(count); // Log the updated count when it changes
    // }, [count]);

    return (
        <div className="cont">
            <h1 className="show">count: {count}</h1>
            <button className="increase" onClick={increaseCount}>Increase Count</button>
            <button className="decrease" onClick={decreaseCount}>Decrease Count</button>
            <button className="zero" onClick={setZero}>Set Zero</button>
        </div>
    );
}

export default Demo;
