import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserActions } from '../../actions';
import { Wrapper } from './PageWrapperStyle';
import Sounds from '../../assets/sounds';
import AudioComponent from '../../components/AudioComponent';

const PageWrapper = props => {
  props.test();
  const [interacted, setInteracted] = useState(false);

  return (
    <Wrapper
      onClick={() => {
        !interacted && setInteracted(true);
      }}
    >
      {interacted && (
        <AudioComponent url={Sounds.theme_song1} loop/>
      )}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/help">About</Link>
          </li>
          <li>
            <Link to="/battle">Battle</Link>
          </li>
        </ul>
      </nav>
      {props.children}
      <footer>Footer</footer>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  username: state.UserReducer.username,
});

const mapDispatchToProps = dispatch => ({
  test: () => dispatch(UserActions.test()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
