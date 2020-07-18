import React, { Component } from 'react';
import Widecard from '../components/Widcard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Bsc Computer Science" where="University of Cape coast" from="August 2011" to="June 2015"/>
            <Widecard title="S.S.C.E" where="Ghana Secondary School" from="2006" to="2009"/>
            <Widecard title="B.E.C.E" where="Kamina Junior High School" from="2003" to="2006"/>
            </div>
            )
        }
    }
    
export default Education
