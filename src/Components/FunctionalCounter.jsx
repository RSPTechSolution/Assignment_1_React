import { useState } from "react";

const FunctionalCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="functional-comp compo ">
                <h1>Functional Component</h1>
                <div className="label">{count}</div>
                <div className="action-button">
                    <button onClick={() => setCount(count + 1)}>➕</button>
                    <button onClick={() => count > 0 && setCount(count - 1)}>➖</button>      
                </div>  
            </div>
        </>
    )
}

export default FunctionalCounter;