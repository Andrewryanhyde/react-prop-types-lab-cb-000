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

Product.PropTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(colors).isRequired,
  weight: function(props, propName, componentName) {
   if (!props[propName]) {
     return new Error("Needs number")
   }
   if (isNaN(props[propName])) {
     return new Error("Not a number")
   }
   if (props[propName] < 80 || props[propName] > 300) {
     return new Error("Outside of weight range")
   }
 } 
}
