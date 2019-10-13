import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {test} from '../../actions';

const PageWrapper = props => {
    console.log('username', props.username);
    props.test();
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">{props.username}</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const mapStateToProps = state => ({
    username: state.UserReducer.username,
});

const mapDispatchToProps = dispatch => ({
    test: () => dispatch(test()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
