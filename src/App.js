import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
// class Field extends Component {
//   render() {
//     const holder = 'Enter here';
//     const styleField = {
//       width: '300px'
//     };

//     return <input
//       placeholder={holder}
//       type="text"
//       style={styleField} />
//   }
// }

function App() {



  return (
    <div className="App">
      {/* <Field /> */}
      <Header />
      <Main />
      
    </div >
  );
}

export default App;
