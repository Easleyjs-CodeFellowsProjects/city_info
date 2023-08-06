import React from 'react'
import { Table } from 'react-bootstrap'
import WeatherDay from './WeatherDay'

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
                            <WeatherDay key={idx} date={day.date} desc={day.desc} />
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}

export default CityWeather