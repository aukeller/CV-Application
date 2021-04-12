import React from 'react';
import '../styles/style.css'

class GeneralForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            phone: "",
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
        const { name, email, phone } = this.state;

        return (
            <div className="section-container">
                <div className="section">
                    <h3>General</h3>
                    {!this.state.done && <form onSubmit={this.onFormSubmit} className="general-form">    
                        <input type="text" value={name} onChange={this.handleChange} name="name" placeholder="Name"/>
                        <input type="email" value={email} onChange={this.handleChange} name="email" placeholder="Email"/>
                        <input type="phone" value={phone} onChange={this.handleChange} name="phone" placeholder="Phone"/>
                        <input type="submit" value="Add" />
                    </form>}
                    {this.state.done && 
                        <div>
                            <General name={name} email={email} phone={phone} />
                            <button onClick={this.onEdit}>Edit</button>
                        </div>
                    }
                </div>
            </div>
        );
    }
    
}

const General = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
        </div>
    );
}

export default GeneralForm;
