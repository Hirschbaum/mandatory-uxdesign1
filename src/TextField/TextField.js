import React from 'react';
import './TextField.css';

class TextField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            fieldActive: false,
        }
    }

    activateField = () => {
        this.setState({ fieldActive: true })
    }

    disableFocus = (e) => {
        if (e.target.value === '') {
            this.setState({ fieldActive: false })
        }
    }

    updateInputValue = (e) => {
        this.setState({ inputValue: e.target.value });
        this.activateField(e);
    }


    render() {

        return (       

            <div style={{ position: 'relative' }}>
                <h4>Delivery to:</h4>
                <div className='textfield-container'>
                    <label
                        style={{ position: 'absolute', top: '10px', left: '5px', fontSize: '16px' }}
                        className={this.state.fieldActive ? 'field-active' : ''}
                        htmlFor='location'>Location
                    </label>
                    <input
                        className='textfield__input'
                        value={this.state.inputValue}
                        onFocus={this.activateField}
                        onBlur={this.disableFocus}
                        onChange={this.updateInputValue}
                        id='location'
                        type='text'
                    />
                    <span className='textfield--border'></span>
                </div>
            </div>
        )
    }
}

export default TextField;