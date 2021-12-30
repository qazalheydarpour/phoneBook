import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ContactList,ContactCard,CardEdit,ContactAdd} from './components'
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route exact path='/' element= {<ContactList/>}>
            <Route  path='new' element= {<ContactAdd/>} />
            <Route path=':contactID' element={<ContactCard/>} > 
              <Route path='edit' element={<CardEdit/>} />
            </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
