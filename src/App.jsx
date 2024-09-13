import './App.css'
import Home1 from './component/home1/HOme1';
import Home5 from './component/home5/Home5'
import Home4 from './pages/homepages/Home4';
// import Homepage2 from './component/home2/homepage2'
import Home3 from './component/home3/Home3';

function App() {
  return (

    <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-poppins'>
      {/* <Homepage2/> */}
      {/* <Home4/> */}
      {/* <Home1/> */}
      {/* <Home5/> */}
      <Home3 />
    </div>
  );
}

export default App;
