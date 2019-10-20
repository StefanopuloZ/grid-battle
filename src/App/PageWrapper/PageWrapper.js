import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {test} from '../../actions';
import {Wrapper} from './PageWrapperStyle';

const PageWrapper = props => {
    console.log('username', props.username);
    props.test();
    return (
        <Wrapper>
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
    test: () => dispatch(test()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
