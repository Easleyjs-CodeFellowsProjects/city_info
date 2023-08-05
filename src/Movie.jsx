import React from 'react'

class Movie extends React.Component {
    render() {
        return (
            <tr>
            <td>{ this.props.idx + 1 }</td>
            <td>{ this.props.popularity }</td>
            <td>{ this.props.title }</td>
        </tr>
        )
    }
}

export default Movie