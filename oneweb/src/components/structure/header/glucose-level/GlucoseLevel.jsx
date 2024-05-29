import axios from "axios";
import dayjs from "dayjs";
import React from "react";
import "../../../../styles/components/structure/header/navigation/glucose/glucose.css"

export default class GlucoseLevel extends React.Component {

    state = {
        level: 0.0,
        date: ""
    }

    componentDidMount() {
        axios.get("https://cache-function.juricamigac.from.hr/glucose/latest").then(response => {
            const level = response.data.value;
            const date = response.data.date;
            this.setState({ level: level, date: date });
            console.log(response);
        })
    }

    render() {
        const formattedDate = dayjs(this.state.date).format("DD.MM.YYYY HH:mm")
        return (
            <ul className="glucose-list center-screen">
                <li>
                    <h1>{this.state.level} mmol/L </h1>
                </li>
                <li>
                    <h2>{formattedDate}</h2>
                </li>
            </ul>
        );
    }

}