import React from 'react';
import './App.scss';
import Header from './components/Header';
import Navigation from './components/Navigation';
import UsersBlock from './components/UsersBlock';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className='descr'>Данное приложение тест публикации ReactApp на GitHub Pages</p>
          <Header />
          <div className="users-block">
            <UsersBlock />
          </div>

          <Navigation />
        </header>
      </div>
    );
  }

}

export default App;
