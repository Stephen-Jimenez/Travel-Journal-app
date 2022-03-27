import './App.css'
import Navbar from './components/Navbar'
import Location from './components/Location'
import Data from './Data.js'

function App() {
  const info = Data.map(function(item) {
    return (
      <Location 
        image={item.imageUrl}
        location={item.location}
        map={item.googleMapsUrl}
        title={item.title}
        start={item.startDate}
        end={item.endDate}
        description={item.description}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      {info}
    </div>
  );
}

export default App;
