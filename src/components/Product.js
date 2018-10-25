import React from 'react'
import PropTypes from 'prop-types'


class Product extends React.component{
  render() {
    return (
      <div>
        <p>this.props.name</p>
        <p>this.props.producer</p>
        <p>this.props.hasWatermark</p>
        <p>this.props.color</p>
        <p>this.props.weight</p>
      </div>
    )
  }
}

const colors = ['white', 'eggshell-white', 'salmon']


Product.defaultProps = {
  hasWatermark: false, 
  
}