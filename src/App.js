import React, {Component} from 'react';
import {connect} from "react-redux";
import 'normalize.css';
import './App.css';
import styled from 'styled-components';

import Header from './components/Header'
import GameArea from './components/Game-area'
import Modal from './components/Modal'
import TimerInner from './elements/TimerInner';
import {TransitionGroup} from 'react-transition-group';


const mapStateToProps = state => {
    return {modalStatus: state.modal.show, modalType: state.modal.modalType};
};

const StyledTimer = styled.div`
 height: 60px;
 position: relative;
 width: 100%;
`;


class App extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }


    render() {


        return (

            <div className="App general-container">
                <TransitionGroup>
                    {this.props.modalStatus === true ? <Modal type={this.props.modalType}/> : null}
                </TransitionGroup>
                <header className="header">
                    <Header/>
                </header>
                <StyledTimer className='timer'>
                    <TimerInner/>
                </StyledTimer>
                <div className='content'>
                    <div className='jar-container'>
                        <GameArea/>
                    </div>
                    <div className='score-container'>
                    </div>
                </div>
            </div>

        );
    }
}

const ConnectedApp = connect(mapStateToProps, null)(App);
export default ConnectedApp


