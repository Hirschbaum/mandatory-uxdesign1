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

                <div aria-label='home delivery option' className='checkbox-container'>
                <label
                    className='checkbox-label' 
                    htmlFor='delivery-home'>home delivery    
                    <input
                        
                        className='checkbox__input'
                        type='checkbox'
                        name='delivery-home'
                        id='delivery-home'
                    />
                    <span className="checkmark"></span>
                    </label>
                </div>

                {/*disabled option*/}
                <div aria-label='disabled option delivery to post'>
                <label
                        className='checkbox-label'
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