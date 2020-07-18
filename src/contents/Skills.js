import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['DOCKER','MONGODB','HTML','CSS','JAVASCRIPT','PHP','REACT JS','FIREBASE','JAVA','SPRINGBOOT','MYSQL','ORACLE']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
            {this.state.myskills.map((value)=>{
                return <h3><ol>{value}</ol></h3>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
