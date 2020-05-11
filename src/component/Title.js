import React, { Component } from 'react'

export default class Title extends Component {
    render() {
const {title,name} = this.props

        return (
            <div className="title">
    <span className="title_style">{title}</span> 
    <span>{name}</span> 

            </div>
        )
    }
}
