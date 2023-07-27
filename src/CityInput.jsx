import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class CityInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityValue: '',
            loc_name: '',
            lat: '',
            lon: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let loc_url = `https://us1.locationiq.com/v1/search.php?key=${import.meta.env.VITE_LOCATION_KEY}&q=${this.state.cityValue}&format=json`
        let cityData = await axios.get(loc_url)

        this.props.setCityInfo({ cityName: cityData.data[0].display_name,
                        lat: cityData.data[0].lat,
                        lon: cityData.data[0].lon
        })
    }

    render() {
        return (
            <>
            <Form onSubmit={(e) => { this.handleSubmit(e) }}>
                <Form.Group className="mb-3" controlId="cityInput">
                    <Form.Control type="text"
                                aria-label="Input the name of the city to search"
                                style={{width: 300 + 'px'}}
                                onChange={(e) => { this.setState( { cityValue: e.target.value } )}}
                    >
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                Explore!
              </Button>
            </Form>
            <p>{this.state.loc_name}</p>
            <p>{this.state.lat}</p>
            <p>{this.state.lon}</p>
            </>
        );
    }
}

export default CityInput;
