
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Header/Nav';
import Style from './Style/Style.css'
import Footerr from './Components/Footer/Footerr';


function App() {
  return (
    <Fragment>
        <Header />
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-1 mynav'>
                <Nav />
            </div>



        </div>
    </div>
    <Footerr/>
    </Fragment>
  );
}

export default App;
