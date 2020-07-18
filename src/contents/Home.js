/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/logo192.png';
import Social from '../components/Social';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['I am Eugene', 'I am a Software Engineer']} speed={100} eraseDelay={700} />
                <Social />
            </div>
        )
    }
}
export default Home
o�����yGlt Home