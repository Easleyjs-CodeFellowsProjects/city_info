import React from 'react';
import { Card } from 'react-bootstrap';

class CityCard extends React.Component {
    render () {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{this.props.cityName}</Card.Title>
              <Card.Text>
                Lat: {this.props.lat}
                <br />
                Lon: {this.props.lon}
              </Card.Text>
            </Card.Body>
          </Card>
        )
    }
}

export default CityCard