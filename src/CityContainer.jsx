import React from 'react'
import CityInput from './CityInput'
import CityCard from './CityCard'


class CityContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName:'',
            lat: '',
            lon: '',
            weatherData: [],
            
        }
    }

    updateCityInfo = (cityInfo) => {
        this.setState(cityInfo)
    }

    updateWeatherInfo = (weatherDaysArr) => {
        this.setState({'weatherData': weatherDaysArr})
        console.log(weatherDaysArr)
    }

    render() {
        return (
            <>
                <CityInput setCityInfo={this.updateCityInfo} updateWeatherInfo={this.updateWeatherInfo} />
                <CityCard cityName={this.state.cityName} 
                          lat={this.state.lat} 
                          lon={this.state.lon} 
                          map={this.state.map}
                          weatherData={this.state.weatherData} />

            </>
        )
    }
}

export default CityContainer