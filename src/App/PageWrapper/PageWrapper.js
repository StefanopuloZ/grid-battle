import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, FooterWrapper, IconWrapper } from './PageWrapperStyle';
import Header from '../../components/Header';
import Icon from '../../components/Icon';

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

      <FooterWrapper>
        Created by - Stefan Deak
        <a href="https://www.linkedin.com/in/stefan-deak-ab7b99182/" target="_blank" rel="noopener noreferrer">
          <IconWrapper>
            <Icon icon="linkedin" />
          </IconWrapper>
        </a>
        <a href="https://github.com/StefanopuloZ" target="_blank" rel="noopener noreferrer">
          <IconWrapper>
            <Icon icon="github" />
          </IconWrapper>
        </a>
      </FooterWrapper>
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
