import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AudioComponent = props => {
  const { url, loop, muted } = props;

  const audio = new Audio(url);
  audio.loop = loop;
  audio.muted = muted;

  useEffect(() => {
    audio.play();

    return () => {
      audio.pause();
    };
  }, [audio]);

  return null;
};

AudioComponent.propTypes = { url: PropTypes.string.isRequired, loop: PropTypes.bool };

AudioComponent.defaultProps = { loop: true };

const mapStateToProps = state => ({ muted: state.ConfigReducer.muted });

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AudioComponent);
