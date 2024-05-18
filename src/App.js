import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Arun from './Component/Arun';
import Asdf from './Component/Asdf';
import Hjkl from './Component/Hjkl';
import Qwer from './Component/Qwer';
import DataFetcher from './Component/DataFetcher';
import Counter from './Component/Counter';
import Contact from './Component/Contact';
import ReactEvents from './Component/ReactEvents';
import ReactForm from './Component/ReactForm';
import UserData from './Component/UserData';

import ReactFormValidation from './Component/ReactFormValidation';

import ClassComponentExample from './Component/ClassComponentExample';
import ParentComponent from './Component/ParentComponent';
import NewComponent from './Component/NewComponent';





function App() {
  return (
    <div>
      {/* <Router>
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-secendary">
  <Link class="navbar-brand" to="/">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/ReactFormValidation">ReactValid</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Counter">Counter</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
        <Routes>
          <Route path='/' element={<ReactForm/>} />   
          <Route path='/ReactFormValidation' element={<ReactFormValidation/> } />
          <Route path='/Counter' element={<Counter/> } />
          <Route path='/DataFetcher' element={<DataFetcher/> } />
          <Route path='/Contact' element={<Contact/> } />
          <Route path='/ReactEvents' element={<ReactEvents/> } />


         
        </Routes>
      </Router> */}
      {/* <DataFetcher/> */}
      {/* <Contact/> */}

      {/* <ReactEvents/> */}

      {/* <ReactForm/> */}



      {/* <ReactFormValidation/> */}
        {/* <ClassComponentExample/> */}
       
   {/* <UserData/> */}



     {/* <ParentComponent/> */}



     {/* <Counter/>  */}


     {/* <ClassComponentExample/> */}
     <NewComponent/>
   
    </div>
  );
}

export default App;









//import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
{/* <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/ReactFormValidation">React Form Validation</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something else</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar> */}