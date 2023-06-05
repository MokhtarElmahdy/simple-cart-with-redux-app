import { RouterProvider } from "react-router-dom";
import {router} from './routing/router'
function App() {
  return (
    <div style={{backgroundColor: '#e4f1f1' , paddingBlock: '100px' , minHeight: '100vh'}}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
