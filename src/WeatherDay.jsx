import React from 'react'

class WeatherDay extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.date}</td>
                <td>{this.props.desc}</td>
            </tr>
        )
    }
}

export default WeatherDay