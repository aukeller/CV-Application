import React from 'react';

class PracticalForm extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div>
                <h3>Practical</h3>
                <form>
                    <label>
                        Company Name:
                        <input type="text" />
                    </label>
                    <label>
                        Position Title:
                        <input type="text" />
                    </label>
                    <label>
                        Main Tasks:
                        <textarea />
                    </label>
                    <label>
                        Dates of Employment
                        <input type="date" />
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
    
}

export default PracticalForm;