import React from "react";

// const newTitle = 'Second Title';
export default class Title extends React.Component{
    state = {
        title: 'First Title'
    }

    componentDidMount() {
        this.setTitle()
    }

    setTitle = () => {
        document.title = this.state.title
    }

    componentDidUpdate(prevState) {
        if (this.state.title !== prevState.title) {
    
            this.setTitle()     
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        const newTitle = 'Second Title'
        this.setState({title: newTitle})
    }

    render() { 
        return (
            <div>
                <button onClick={this.handleClick}>Change</button>
            </div>
        )
    }
}