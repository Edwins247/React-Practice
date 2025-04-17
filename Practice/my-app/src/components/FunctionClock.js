import React, { useEffect, useState } from "react";

export default function FunctionClock() {
    const [date, setDate] = useState(new Date());

    function tick() {
        setDate(new Date());
    }

    useEffect(() => {
        console.log("componentDidMount");
        const timerID = setInterval(() => tick(), 1000);

        return () => {
            console.log("componentWillUnmount");
            clearInterval(timerID);
        }
    }, []);

    useEffect(() => {
        console.log("componentDidUpdate");
        console.log(date);
    }, [date]);

    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {date.toLocaleDateString()}.</h2>
        </div>
    )
}