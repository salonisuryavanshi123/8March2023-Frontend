import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateTeacher from './pages/Teacher/CreateTeacher';
import CreateStudent from './pages/Student/CreateStudent';

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/teacher/create' element={ <CreateTeacher /> }></Route>
          <Route path='/student/create' element={ <CreateStudent /> }></Route>
        </Routes>
       </BrowserRouter>       
    </>
  );
}

export default App;
