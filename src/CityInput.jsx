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

    updateAPIData = async (options) => {
        const { query_url, stateUpdate } = options
        const queryData = await axios.get(query_url).catch((err) => {
            this.setState({ apiError: err.message })
        })
        stateUpdate(queryData.data)
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ displayError: false,
                        apiError: ''
        })
        const loc_url = `https://us1.locationiq.com/v1/search.php?` +
                        `key=${import.meta.env.VITE_LOCATION_KEY}`  +
                        `&q=${this.state.cityValue}&format=json`
        let cityData = await axios.get(loc_url).catch((err) => {
            this.setState({ apiError: err.message })
        })
        const { display_name, lat, lon } = cityData.data[0]
        this.props.setCityInfo({ cityName: display_name,
                                 lat: lat,
                                 lon: lon        
        })
        const { cityValue } = this.state

        // make call to local api /weather route with name, lat, lon
        this.updateAPIData({ query_url: `${import.meta.env.VITE_WEATHER_ROUTE}` + 
                                        `?searchQuery=${cityValue}` + 
                                        `&lat=${lat}&lon=${lon}`,
                             stateUpdate: this.props.updateWeatherInfo
        })

        // make call to local api /movies route with searchQuery/city name
        this.updateAPIData({ query_url: `${import.meta.env.VITE_MOVIES_ROUTE}?searchQuery=${cityValue}`,
                             stateUpdate: this.props.updateMoviesInfo
        })
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
                <Form onSubmit={ (e) => { this.handleSubmit(e) }}>
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
