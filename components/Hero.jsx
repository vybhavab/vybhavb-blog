/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import classnames from 'classnames';

const calcSize = size => (!size ? '' : `is-${size}`);

export default data => (
  <div>
    <section className={classnames('hero', 'is-primary', calcSize(data.size))}>
      <div className="hero-head">
        <div className="container has-text-centered">
          <h1 className="header title">
            {data.title}
          </h1>
          <h1 className="subtitle">
            {data.subtitle}
          </h1>
        </div>
      </div>
    </section>
  </div>
);
