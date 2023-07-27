import React from 'react'
import CityInput from './CityInput'
import CityCard from './CityCard'

class CityContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName:'',
            lat: '',
            lon: ''
        }
    }

    updateCityInfo = (values) => {
        this.setState(values)
    }

    render() {
        return (
            <>
                <CityInput setCityInfo={this.updateCityInfo} />
                <CityCard cityName={this.state.cityName} lat={this.state.lat} lon={this.state.lon} map={this.state.map} />
                
            </>
        )
    }
}

export default CityContainer