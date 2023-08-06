import React from 'react'
import { Table } from 'react-bootstrap'
import Movie from './Movie'

class CityMovies extends React.Component {
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Popularity</th>
                        <th>Movie Title</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.moviesData.map((movie, idx) => {
                        return (
                            <Movie key={idx} idx={idx} title={movie.title} popularity={movie.popularity} />
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}

export default CityMovies