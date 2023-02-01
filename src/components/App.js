
import '../App.css';
import Lane from './Lane';

function App() {
  return (
    <div className="App">
      
      <Lane 
      position="left"
      />
      <Lane 
      position="mid"
      />
      <Lane 
      position="right"
      />
      
    </div>
  );
}

export default App;
