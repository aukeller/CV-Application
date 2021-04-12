import React from 'react';
import '../styles/style.css'

class PracticalForm extends React.Component {
    constructor() {
        super();
        this.state = {
            company: "",
            position: "",
            tasks: "",
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
        const { company, position, tasks, start, end } = this.state;

        return (
            <div className="section-container">
                <div className="section">
                    <h3>{this.props.heading}</h3>
                    {!this.state.done && <form onSubmit={this.onFormSubmit} className="practical-form">
                        <div className="sub-section">
                            <input type="text" value={company} onChange={this.handleChange} name="company" placeholder="Company Name"/>    
                            <input type="text" value={position} onChange={this.handleChange} name="position" placeholder="Position Title"/>
                        </div>    
                        
                        
                        <div className="sub-section">
                            <div className="date-range">
                                <h4>From</h4>
                                <input type="date" value={start} onChange={this.handleChange} name="start" />
                            </div>
                            <div className="date-range">
                                <h4>To</h4>
                                <input type="date" value={end} onChange={this.handleChange} name="end" />
                            </div>
                        </div>
                       
                        <textarea value={tasks} onChange={this.handleChange} name="tasks" placeholder="Provide a summary of your tasks" rows="10"/>
    

                        <input type="submit" value="Add" />
                    </form>}
                    {this.state.done && 
                        <div>
                            <Practical company={company} position={position} tasks={tasks} start={start} end={end} />
                            <button onClick={this.onEdit}>Edit</button>
                        </div>
                    }
                </div>    
            </div>
        );
    }
    
}

const Practical = (props) => {
    return (
        <div>
            <p>{props.company}</p>
            <p>{props.position}</p>
            <p>{props.tasks}</p>
            <p>{props.start}</p>
            <p>{props.end}</p>
        </div>
    );
}

export default PracticalForm;