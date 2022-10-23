import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)

        // Set initial state
        this.state = { msg: 'Hi, There!' }

        // Binding this keyword
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

        // Changing state
        this.setState({ msg: 'Welcome to the React world!' })
    }

    render() {
        return (
            <div>
                <h2>Message :</h2>


                <p>{this.state.msg}</p>



                {/* Set click handler */}
                <button onClick={this.handleClick}>
                    Click here!
                </button>
            </div>
        )
    }
}

export default App
