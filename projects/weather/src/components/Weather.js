import React from "react";

export default class Weather extends React.Component{
    render(){
        return(
            <div className = "container">
                <div className = "cards">
                    <h1>Weather App</h1>
                    <h5 className = "py-4 mt-4">
                        <i className = "wi wi-day-sunny display-1"></i>
                    </h5>
                    <h1 className = "py-2">27&deg;</h1>
                    {minMaxTemp(25,34)}
                </div>
            </div>
        )
    }
}
function minMaxTemp(min,max) {
    return (
        <div className = "container row mt-4">
             <div className = "col-4"></div>
            <div className = "col-2">
            <p className = "py-4 ml-5">{min}&deg;</p>
            </div>
            <div className = "col-2">
                <p className = "py-4">{max}&deg;</p>
            </div>
        </div>
    )
}

