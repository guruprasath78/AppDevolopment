import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './components/forms/LoginForm'
import SignUp from './components/forms/SignUp';
import Sync1 from './practice/Sync1';
import Sync2 from './practice/Sync2';
import Share from './practice/share';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm></LoginForm>}></Route>
          <Route path='/practice' element={<><Share></Share></>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
