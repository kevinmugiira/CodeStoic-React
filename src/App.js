// import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Profile from './components/Profile';
import Counter from './components/Counter';
import Profile from './components/Profile';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import FunctionalCounter from './components/FunctionalCounter';
import ConditionalComponent from './components/ConditionalComponent';

function App() {
  return (
    <div className="App">
      {/* <div>
        <Counter/>  
      </div>    
      <div>
        <Profile name="Henry" lastname="Ford"/>
      </div>
      <div>
        <Resume name="Richard"></Resume>
      </div>
      <div>
        <FunctionEvent></FunctionEvent>
      </div> */}
      {/* <div>
        <ClassEvent/>
      </div>
      <div>
        <FunctionalCounter/>
      </div> */}
      <div>
        <ConditionalComponent/>
      </div>
    </div>
  );
}

export default App;
