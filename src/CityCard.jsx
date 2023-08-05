import React from 'react';
import { Card } from 'react-bootstrap';
import CityWeather from './CityWeather';
import CityMovies from './CityMovies';

class CityCard extends React.Component {
    render () {
        return (
            <Card variant="flat" style={{ width: '36rem' }}>
              <Card.Title>{this.props.cityName}</Card.Title>
              <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${import.meta.env.VITE_LOCATION_KEY}&center=${this.props.lat},${this.props.lon}&zoom=14`} />
              <Card.Body>
                <Card.Text>
                  Lat: {this.props.lat}
                  <br />
                  Lon: {this.props.lon}
                </Card.Text>
              </Card.Body>
              <h3>Local Weather Forecast (16-day)</h3>
              <CityWeather weatherData={this.props.weatherData} />
              <h3>Popular Movies featuring this City</h3>
              <CityMovies moviesData={this.props.moviesData} />
          </Card>
        )
    }
}

export default CityCard