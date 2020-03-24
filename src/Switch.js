import React from 'react';
import './Switch.css';

class Switch extends React.Component {

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4>Notifications (on/off)</h4>

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className='switch__outline' style={{ display: 'flex', flexDirection: 'column' }}>
                        <label className='switch switch--checked' >
                            <input type='checkbox' />
                            <span className='track'></span>
                        </label>
                        <p>e-mail</p>
                    </div>

                    {/* disabled switch */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label className='switch switch--chekced' >
                            <input type='checkbox' disabled='disabled' className='disabled-thumb' />
                            <span className='track'></span>
                        </label>
                        <p>sms</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Switch;