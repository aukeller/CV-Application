import React from 'react';

class EducationForm extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div>
                <h3>Education</h3>
                <form>
                    <label>
                        School Name:
                        <input type="text" />
                    </label>
                    <label>
                        Title of Study:
                        <input type="text" />
                    </label>
                    <label>
                        Date of study:
                        <input type="date" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
    
}

export default EducationForm;
