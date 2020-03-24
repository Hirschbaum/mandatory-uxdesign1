import React from 'react';
import './Switch.css';

class Switch extends React.Component {

    //focus state

    render() {
        return (
            <div style={{position: 'relative', width: '240px'}}>
            <p style={{position: 'absolute', top: '64px'}}>Notifications (on/off)</p>
            {/*on/off switch */}
            <p style={{position: 'absolute', left: 10, top: '128px'}}>sms</p>
                <label className='switch' style={{position: 'absolute', left: 10, top: '112px'}}>
                    <input type='checkbox' />
                    <span className='track'></span>
                </label>
                

            {/* disabled switch */}
                <label className='switch switch--chekced' style={{position: 'absolute', left: 100, top: 112}}>
                    <input type='checkbox' disabled='disabled' className='disabled-thumb'/>
                    <span className='track'></span>
                </label>
                <p style={{position: 'absolute', left: 100, top: '128px'}}>pigeon</p>
            </div>
        )
    }
}

export default Switch;