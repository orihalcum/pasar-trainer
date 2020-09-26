import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { getCookie } from '../utils/cookies';
import { SITE_COOKIES, MENU } from '../config';
import PropTypes from 'prop-types'

const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route 
      { ...rest }
      render={ (props) => (
        getCookie(SITE_COOKIES.TOKEN)
        ? <Component { ...props } />
        : <Redirect to={{ path: MENU.LOGIN, state: { from: props.location } }} />
      )}
    />
  );
};

export default PrivateRouter;

PrivateRouter.defaultProps = {
  location: null,
}

PrivateRouter.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
}