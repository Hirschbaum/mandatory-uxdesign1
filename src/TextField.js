import React from 'react';

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
                <br />
                <div className='container'>
                    <label
                        style={{ position: 'absolute', top: '10px', left: '5px', fontSize: '16px' }}
                        className={this.state.fieldActive ? 'field-active' : ''}
                        htmlFor='location'>Location
                    </label>
                    <input
                        className='input'
                        value={this.state.inputValue}
                        onFocus={this.activateField}
                        onBlur={this.disableFocus}
                        onChange={this.updateInputValue}
                        id='location'
                        type='text'
                    />
                    <span className='border'></span>
                </div>
            </div>
        )
    }
}

export default TextField;