import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './components/forms/LoginForm'
import SignUp from './components/forms/SignUp';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm></LoginForm>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
