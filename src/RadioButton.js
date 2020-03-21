import React from 'react';

class RadioButton extends React.Component {
    render() {
        return (
            <div style={{marginTop: '90px'}}>
                <br/>
                <p>Carrier:</p>
                <input type='radio' name='carrier' id='dhl'/>
                <label htmlFor='dhl'>DHL</label>
                <input type='radio' name='carrier' id='brings'/>
                <label htmlFor='brings'>Brings</label>
            </div>
        )
    }
}

export default RadioButton;