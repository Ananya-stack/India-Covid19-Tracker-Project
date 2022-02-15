import './App.css';
import Barchart from './component/barChart';
import Covid from './component/covid';


function App() {
  return (
    <div className="App">
      <h2>India Covid-19 Dashboard </h2>
     <Barchart/>
      <h2 className='state-data'>Covid-19 State-wise Data</h2>
      <Covid/>
    </div>
  );
}

export default App;
