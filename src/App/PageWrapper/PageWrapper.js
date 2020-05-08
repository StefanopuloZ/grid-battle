import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, FooterWrapper } from './PageWrapperStyle';
import Header from '../../components/Header';

const PageWrapper = props => {
  const [interacted, setInteracted] = useState(false);

  return (
    <Wrapper
      onClick={() => {
        !interacted && setInteracted(true);
      }}
    >
      <Header />

      {props.children}

      <FooterWrapper>Created by - Stefan Deak</FooterWrapper>
    </Wrapper>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.object,
};

PageWrapper.defaultProps = {
  childrenchildren: {},
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
