import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Main = ({ children, headingText, headingLevel = 2, location }) => {
  const heading = useRef(null);
  const H = `h${headingLevel}`;

  useEffect(() => {
    if (location.state && location.state.focus) {
      heading.current.focus();
    }
    window.scrollTo(400, 0);
  }, [location.state]);

  return (
    <main>
      <Helmet>
        <title>{headingText} | Ice Cream Store</title>
      </Helmet>
      <H className="main-heading" ref={heading} tabIndex="-1">
        {headingText}
      </H>
      {children}
    </main>
  );
};

Main.propTypes = {
  headingText: PropTypes.string.isRequired,
  headingLevel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      focus: PropTypes.bool,
    }),
  }),
};

export default withRouter(Main);
