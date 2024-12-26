import React, {useState} from 'react'

function Counter(){
    const [count, setCount] = useState(0);

    const IncreaseBtn = () => {
        setCount(count + 1);
    }
    const ResetBtn = () => {
        setCount(0);
    }
    const DecreaseBtn = () => {
        if (count > 0)
            setCount(count - 1);
    }

    const StyleParent = {
        alignItems : "center",
        justifyContent : "center",
        textAlign : "center",
        display : "flex",
        height : "100vh"
    }
    const Style0 = {
        backgroundColor : "gray",
        width : "50%",
        padding : "10px",
        display : "flex",
        alignItems : "center",
        flexDirection : "column",
        justifyContent : "center",
        textAlign : "center",
        borderRadius : "5px"
    }
    const titleStyle = {
        color : "blue",
        fontFamily : "arial, sans-serif",
        fontSize: "25px"
    }
    const Style1 = { 
        backgroundColor : "#99ff80eb",
        margin : "10px",
        fontFamily : "arial, sans-serif",
        width : "100px",
        height : "30px",
        borderRadius : "5px",
        color : "White"
    }
    const Style2 = { 
        backgroundColor : "orange",
        margin : "10px",
        fontFamily : "arial, sans-serif",
        width : "100px",
        height : "30px",
        borderRadius : "5px",
        color : "White"
    }
    const Style3 = { 
        backgroundColor : "#ff0000",
        margin : "10px",
        fontFamily : "arial, sans-serif",
        width : "100px",
        height : "30px",
        borderRadius : "5px",
        color : "White"
    }
    const CounterTitle = {
        color : "Red",
        fontFamily : "arial, sans-serif",
    }


    return(
        <div style={StyleParent}>
            <div style={Style0}>
                <div>
                    <h3 style={CounterTitle}>
                        Counter Program
                    </h3>
                </div>
                <div>
                    <p style={titleStyle}>{count}</p>
                </div>
                 <div>
                 <button style ={Style1} onClick={IncreaseBtn}>Increase</button>
                 <button style ={Style2} onClick={ResetBtn}>Reset</button>
                 <button style ={Style3} onClick={DecreaseBtn}>Decrease</button>
                 </div>
            </div>
        </div>
    );
};

export default Counter;