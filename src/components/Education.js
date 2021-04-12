import React from 'react';
import '../styles/style.css'

class EducationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            school: "",
            study: "",
            start: "",
            end: "",
            done: false,
        };

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.setState({
            done: true
        });
    }

    onEdit = (e) => {
        e.preventDefault();
        this.setState({
            done: false
        });
    }

    
    render() {
        const {school, study, start, end} = this.state;

        return (
            <div className="section-container">
                <div className="section">
                    <h3>Education</h3>
                    {!this.state.done && <form onSubmit={this.onFormSubmit}>
                        <div className="sub-section">
                            <input type="text" value={school} onChange={this.handleChange} name="school" placeholder="School Name"/>
                            <input type="text" value={study} onChange={this.handleChange} name="study" placeholder="Major/Study"/>
                        </div>
                        
                        <div className="sub-section">
                            <input type="date" value={start} onChange={this.handleChange} name="start"/>
                            <input type="date" value={end} onChange={this.handleChange} name="end"/>
                        </div>
                        

                        <input type="submit" value="Add" />
                    </form>}
                    {this.state.done && 
                        <div>
                            <Education school={school} study={study} start={start} end={end} />
                            <button onClick={this.onEdit}>Edit</button>
                        </div>
                    } 
                </div>
            </div>
        );
    }
    
}

const Education = (props) => {
    return (
        <div>
            <p>{props.school}</p>
            <p>{props.study}</p>
            <p>{props.start}</p>
            <p>{props.end}</p>
        </div>
    );
}

export default EducationForm;
