import React from 'react';
import { Card, Image } from 'react-bootstrap';
import CityWeather from './CityWeather';

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
              <CityWeather weatherData={this.props.weatherData} />
          </Card>
        )
    }
}

export default CityCard