import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const FloatingShape = ({ color, size, top, left, delay, blur }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} ${size} ${blur} opacity-40 animate-float`}
      style={{
        top,
        left,
        animation: `float 20s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

FloatingShape.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  blur: PropTypes.string,
};

export default FloatingShape;