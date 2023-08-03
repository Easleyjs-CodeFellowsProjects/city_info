import React from 'react'
import { Table } from 'react-bootstrap'

class CityWeather extends React.Component {

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Forecast</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weatherData.map((day, idx) => {
                        return (
                            <tr key={idx} >
                                <td>{day.date}</td>
                                <td>{day.desc}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}

export default CityWeather