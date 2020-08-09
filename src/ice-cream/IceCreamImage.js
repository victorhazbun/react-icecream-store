import React from 'react';
import PropTypes from 'prop-types';

const IceCreamImage = ({iceCreamId}) => (
  iceCreamId != null && (
  <img
    src={`${process.env.PUBLIC_URL}/ice-cream-images/ice-cream-${iceCreamId.toString()}.svg`}
    alt=""
  />)
);

IceCreamImage.propTypes = {
  iceCream: PropTypes.number.isRequired
}

export default IceCreamImage;