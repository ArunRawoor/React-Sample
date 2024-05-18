import React, { Component } from 'react';

class ClassComponentExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };
  }

  componentDidMount() {
    // Similar to useEffect with an empty dependency array
    console.log('Component mounted');
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    // Similar to useEffect with a dependency array
    if (prevState.count !== this.state.count) {
      console.log('Count updated');
      document.title = `You clicked ${this.state.count} times`;
    }
  }

  componentWillUnmount() {
    // Cleanup similar to useEffect's cleanup function
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment 
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          decrement 
        </button>
      </div>
    );
  }
}

export default ClassComponentExample;
