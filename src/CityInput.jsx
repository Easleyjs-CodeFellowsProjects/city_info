import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button, Alert } from 'react-bootstrap';
import axios from 'axios';

class CityInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityValue: '',
            loc_name: '',
            lat: '',
            lon: '',
            displayError: false,
            apiError: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        //if (this.state.cityValue) {
            this.setState({ displayError: false,
                            apiError: ''
            })
            let loc_url = `https://us1.locationiq.com/v1/search.php?key=${import.meta.env.VITE_LOCATION_KEY}&q=${this.state.cityValue}&format=json`
            let cityData = await axios.get(loc_url).catch((err) => {
                this.setState({ apiError: err.message })
            })

            this.props.setCityInfo({ cityName: cityData.data[0].display_name,
                            lat: cityData.data[0].lat,
                            lon: cityData.data[0].lon        
            })
        //}else{
        //    this.setState({ displayError: true })
        //}
    }

    errorMessage = (displayError) => {
        if (displayError) {
            return <p className='text-warning'>Please enter a City name.</p>
        }
    }

    apiErrorMessage = (displayApiError) => {
        if (displayApiError) {
            return <Alert key='1' variant='danger'>
            API Error: { this.state.apiError }
          </Alert>
        }
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
                    {
                        this.errorMessage(this.state.displayError)
                    }
                </Form.Group>
                <Button variant="flat" type="submit">
                Explore!
              </Button>
              {
                    this.apiErrorMessage(this.state.apiError)
              }
            </Form>
            <p>{this.state.loc_name}</p>
            <p>{this.state.lat}</p>
            <p>{this.state.lon}</p>
            </>
        );
    }
}

export default CityInput;
