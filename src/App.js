import React, { Component } from 'react';

import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>

          <Layout>
              <h1>This is a children content!</h1>
          </Layout>

      </div>
    )
  }
}

export default App;
