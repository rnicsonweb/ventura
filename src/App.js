import React, { Component } from 'react';
import logo from './logo.svg';
import { createRoot } from 'react-dom';
import { useFirestoreDocData, useFirestore, SuspenseWithPerf} from 'reactfire';
import './App.css';
import { FirebaseAppProvider } from 'reactfire';
import firebase from 'firebase';
import firebaseConf from './Firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  componentWillMount() {
    let formRef = firebaseConf.database().ref('form').orderByKey().limitToLast(6);
    formRef.on('child_added', snapshot => {
      const {email} = snapshot.val();
      const data = { email,};
      this.setState({ form: [data].concat(this.state.form) });
    })
  }


  onClick(){
      if (this.inputEmail.value == "") {
      }else {
        document.getElementById('formulario').style.display = 'none';
        document.getElementById('video').style.display = 'block';
      }
  }


  myPlay(){
    const params = {
      email: this.inputEmail.value,
      action: "play",
      created_at: Date(),
    };
    firebaseConf.database().ref('form').push(params)
  }

  myPause(){
    const params = {
      email: this.inputEmail.value,
      action: "pause",
      created_at: Date(),
    };
    firebaseConf.database().ref('form').push(params)
  }

  sendMessage(e) {
    e.preventDefault();
    const params = {
      email: this.inputEmail.value,
      action: "Email Inserido",
      created_at: Date(),
    };
    firebaseConf.database().ref('form').push(params)
  }

  render() {
    return (
          <center>

            <header>
              <div id={"title"}><h1>Watch</h1></div>
            </header>

            <div className='container'>
              <div className='col-md-12'>
                <div className='card'>
                <div id="formulario">
                <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' >
                  <div className='form-group'>
                    <div id="email">
                      <input type='email' className='form-control' id='email' placeholder='Insira seu e-mail'  ref={email => this.inputEmail = email}  required/>
                      </div>
                    <div id="botao">
                    <input type='submit' value='Assistir' onClick={this.onClick.bind(this)} />
                    </div>
                  </div>
                </form>
                  </div>
                <div id="video">
                <video onPlay={this.myPlay.bind(this)} onPause={this.myPause.bind(this)} width="500px" controls>
                  <source src="tecnologia.mp4" type="video/mp4" />
                </video>
                  </div>
              </div>
                </div>
            </div>

            <div id={"author"}>Richard Nicson Costa de Lima</div>
          </center>
    );
  }
}
export default App;
