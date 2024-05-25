import axios from "axios";
import React from "react";

export default class GlucoseLevel extends React.Component {

    state = {
        level: 0.0
    }

    componentDidMount() {
        axios.get("https://cache-function.juricamigac.from.hr/glucose/latest").then(response => {
            const level = response.data.value;
            this.setState({ level: level });
            console.log(response);
        })
    }

    render() {
        return (
            <span>{this.state.level} mmol/L</span>
        );
    }

}