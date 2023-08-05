import React from 'react'
import { Table } from 'react-bootstrap'

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
                            <tr key={idx} >
                                <td>{ idx + 1 }</td>
                                <td>{movie.popularity}</td>
                                <td>{movie.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}

export default CityMovies