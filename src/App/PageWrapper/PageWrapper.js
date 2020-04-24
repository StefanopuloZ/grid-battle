import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Wrapper, FooterWrapper } from './PageWrapperStyle';
import Sounds from '../../assets/sounds';
import AudioComponent from '../../components/AudioComponent';
import Header from '../../components/Header';

const PageWrapper = props => {
  const [interacted, setInteracted] = useState(false);

  return (
    <Wrapper
      onClick={() => {
        !interacted && setInteracted(true);
      }}
    >
      {interacted && <AudioComponent url={Sounds.theme_song1} loop />}

      <Header />

      {props.children}

      <FooterWrapper>Footer</FooterWrapper>
    </Wrapper>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
