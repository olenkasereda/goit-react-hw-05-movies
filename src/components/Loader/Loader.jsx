import React from 'react';
import PropTypes from 'prop-types';
import PropagateLoader from 'react-spinners/PropagateLoader';

import { Wrapper } from './Loader.styled';

const Loader = ({ loading }) => {
  return (
    <Wrapper>
      <PropagateLoader loading={loading} color="#3f51b5" size={20} />
    </Wrapper>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loader;
