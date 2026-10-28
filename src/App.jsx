
import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    image: null,
    loading: false
  };

  getFox = async () => {
    this.setState({
      loading: true
    });

    try {
      const url = 'https://randomfox.ca/floof/';
      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        image: data.image
      });
    } catch (error) {
      console.error('Error loading fox:', error);
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  componentDidMount() {
    this.getFox();
  }

  render() {
    return (
      <div>
        <h1>Random Fox</h1>

        {this.state.loading && <p>Loading...</p>}

        {this.state.image && (
          <img
            src={this.state.image}
            alt="Random fox"
            width="500"
          />
        )}

        <button
          onClick={this.getFox}
          disabled={this.state.loading}
        >
          Get Another Fox
        </button>
      </div>
    );
  }
}

export default App;
