import React from 'react';
import './Checkbox.css';

class Checkbox extends React.Component {

    render() {
        return (
            <div
                className='checkbox-container'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}>

                <div>
                    <input
                        type='checkbox'
                        name='delivery-home'
                        id='delivery-home'
                    />
                    <label
                        htmlFor='delivery-home'>
                        home delivery
                    </label>
                </div>

                {/*disabled option*/}
                <div>
                    <input
                        className='delivery-post'
                        disabled='disabled'
                        type='checkbox'
                        name='delivery-post'
                        id="delivery-post"
                    />
                    <label
                        htmlFor='delivery-post'
                        style={{ color: 'silver' }}>
                    collect at post office
                    </label>
                </div>
            </div>
        )
    }
}

export default Checkbox;