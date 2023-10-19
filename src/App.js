import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Routes} 
                    from 'react-router-dom';


import EditList from './components/editlist.component';
import AddTodo from './components/addtodo.component';
import TodoLists from './components/todolists.component';
import Navigation from './components/navigation.component';

function App() {
  return (
    <Router>
       <Navigation/>
    <Routes>
      <Route path='/' Component={TodoLists}/>
      <Route path='/edit/:id' Component={EditList}/>
      <Route path='/add' Component={AddTodo}/>
    </Routes>


    </Router>
  );
}

export default App;
