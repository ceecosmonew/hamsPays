
    
    import HOME from '../src/App'
    import CURRICULUM from '../src/hamspage'
   
    import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
   
    
function mmain() {
   
  return (
    <div>
    
   
          <Router>
          <Routes>
         
          <Route path='/' element={<HOME/>}/>
          <Route path='/hamspage' element={<CURRICULUM/>}/>
        
         
         
          </Routes>
          </Router>
    
          </div>
  )
}

export default mmain