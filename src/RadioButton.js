import React from 'react';
import './RadioButton.css';

class RadioButton extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                
                <div>
                    <h4>Carrier:</h4>
                    <label className='radio' htmlFor='dhl'>DHL
                        <input
                            type='radio'
                            name='carrier'
                            id='dhl'
                        />
                        <span className='radio__checkmark'></span>
                    </label>
                </div>

                <div>
                    <label className='radio' htmlFor='brings'>Brings
                        <input
                            type='radio'
                            name='carrier'
                            id='brings'
                        />
                        <span className='radio__checkmark'></span>
                    </label>
                </div>

                <div>
                    <label style={{color: '#9E9E9E'}} className='radio radio--disabled' htmlFor='drone'>drone
                        <input
                            type='radio'
                            name='carrier'
                            id='drone'
                            disabled='disabled' /*this makes the input disabled*/
                        />
                        <span className='radio__checkmark radio__checkmark--disabled'></span>
                    </label>
                </div>
            </div>
        )
    }
}

export default RadioButton;