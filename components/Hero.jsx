/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const calcSize = size => (!size ? '' : `is-${size}`);

const Hero = ({ title, subtitle, size }) => (
  <div>
    <section className={classnames('hero', 'is-primary', calcSize(size))}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="header title">
            {title}
          </h1>
          <h1 className="subtitle">
            {subtitle}
          </h1>
        </div>
      </div>
    </section>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,

};

export default Hero;
