import React from 'react';
import './Checkbox.css';

class Checkbox extends React.Component {

    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}>

                <div>
                <label 
                    className='checkbox-container' 
                    htmlFor='delivery-home'>home delivery    
                    <input
                        type='checkbox'
                        name='delivery-home'
                        id='delivery-home'
                    />
                    <span className="checkmark"></span>
                    </label>
                </div>

                {/*disabled option*/}
                <div>
                <label
                        className='checkbox-container'
                        htmlFor='delivery-post'
                        style={{ color: '#bbb' }}>collect at post office
                    <input
                        className='delivery-post'
                        disabled='disabled' /*this makes the input disabled*/
                        type='checkbox'
                        name='delivery-post'
                        id="delivery-post"
                    />
                    <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        )
    }
}

export default Checkbox;