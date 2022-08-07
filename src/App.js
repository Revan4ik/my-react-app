import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import {LeftMenu, activeMenu} from './components/MenuL';



function App() {
  return (
    <div className='App'>
      <Header title ='Header' menuActive = {activeMenu} />
      <div className="container">
        <LeftMenu item1 ="Menu item" item2 ="Menu item" 
        item3 ="Menu item" item4 ="Menu item" item5 ="Menu item"/>
        <Content text = 'Something' />
      </div>
    </div>
  );
}

export default App;
