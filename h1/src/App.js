
import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'home' ,      
    }
  }

  handleClick = (event) => {
    event.preventDefault()
    const value = event.target.name

    this.setState({ currentPage: value })
  }

  renderPage() {
    switch(this.state.currentPage) {
      case 'home':
        return <Home />;
      
      case 'news':
        return <News />;

      
      case 'callback':
        return <CallBack />;

      case 'contacts':
        return <Contacts />;      
      
      default:
        return  <Home />;
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <a name = 'home' onClick={this.handleClick}>
              Home
            </a>
          </li>
          <li>
            <a name = 'news' onClick={this.handleClick}>
              News
            </a>
          </li>
          <li>
            <a name = 'callback' onClick={this.handleClick}>
              CallBack
            </a>
          </li>
          <li>
            <a name = 'contacts' onClick={this.handleClick}>
              Contacts
            </a>
          </li>
        </ul>
        <div id='container'>{this.renderPage()}</div>
      </div>      
    )
  }
};

class Home extends React.Component { 
  constructor() {
    super()
    this.text = 'Home Page'
  }
  render() {
    return <div>{this.text}</div>
  }
}

class News extends React.Component { 
  constructor() {
      super()
      this.text = 'News Page'
    }
    render() {
      return <div>{this.text}</div>
    }
  }

class CallBack extends React.Component { 
  constructor() {
      super()
      this.text = 'CallBack Page'
    }
    render() {
      return <div>{this.text}</div>
    }
  }

class Contacts extends React.Component { 
  constructor() {
      super()
      this.text = 'Contacts Page'
    }
    render() {
      return <div>{this.text}</div>
    }
  }

export default App;
