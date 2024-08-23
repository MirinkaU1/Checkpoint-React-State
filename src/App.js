import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'CHERIF Mohamed Abraham',
        bio: 'Développeur passionné et étudiant chez GoMyCode',
        imgSrc: '/avatar.png',
        profession: 'Développeur Web',
      },
      shows: false,
      timeSinceMounted: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timeSinceMounted } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Cacher le Profil' : 'Montrer le Profil'}
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <img src={person.imgSrc} alt="Profil" />
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}
        <p>Temps écoulé depuis le montage : {timeSinceMounted} secondes</p>
      </div>
    );
  }
}

export default App;
