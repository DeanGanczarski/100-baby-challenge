import React from 'react'

export class Button extends React.Component {
    render() {
        return(
            <button class="btn btn-primary btn-block" onClick={this.props.handleClick}>{this.props.label}</button>
        )
    }
}