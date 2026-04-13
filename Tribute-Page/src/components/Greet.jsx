import React from "react";

const Greet = (props) => {
    return(
        <>
            <div>Hello {props.user}</div>
            <p>Welcome to tutorial </p>
            <p>you have completed {props.session} sessions with 3 exams</p>
        </>
    )
}

export default Greet     