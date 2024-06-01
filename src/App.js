import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import SignInPage from './Pages/SignIn/SignInPage';
import CallPage from './Pages/CallPage/CallPage';
import TestApp from './testApp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/user/:username' element={<HomePage/>}/>
        <Route path="/signIn" element={<SignInPage/>}/>
        <Route path='/callPage' element={<CallPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
