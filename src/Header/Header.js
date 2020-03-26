import React from 'react';

export default function Header() {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            height: '4em',
            width: '100vw',
            backgroundColor: '#00838f',
            marginLeft: '-2em',
            }}>
                
            <h1 style={{ 
                color: '#fff', 
                fontSize: '1.5em',
                 letterSpacing: '0.1em'}}>MD Simple Library
            </h1>
        </div>
    )
}