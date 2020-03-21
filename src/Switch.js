import React from 'react';
import './Switch.css';

class Switch extends React.Component {

    //focus state

    render() {
        return (
            <div style={{position: 'relative'}}>
                
            {/*on/off switch */}
                <label className='switch' style={{position: 'absolute', left: 10, top: '100px'}}>
                    <input type='checkbox' />
                    <span className='track'></span>
                </label>
                <p style={{position: 'absolute', left: 10, top: '122px'}}>on/off</p>

            {/* disabled switch */}
                <label className='switch switch--chekced' style={{position: 'absolute', left: 60, top: 100}}>
                    <input type='checkbox' className='disabled-thumb' checked/>
                    <span className='track'></span>
                </label>
                <p style={{position: 'absolute', left: 60, top: '122px'}}>disabled</p>
            </div>
        )
    }
}

export default Switch;