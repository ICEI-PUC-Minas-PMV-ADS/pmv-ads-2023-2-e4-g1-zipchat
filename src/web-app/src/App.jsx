import Login from "./pages/Login"

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyAWlNXeaULFmGg-ExGJFFeuBmCSVkvJxWQ',
    projectId: 'projeto-teste-d65b6'
};
  
const app = initializeApp(firebaseConfig);

function App() {

  return (
    <div className="flex items-center h-screen justify-center">
     <Login />
    </div>
  )
}

export default App
