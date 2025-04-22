import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import animalGroups from "./assets/data"

createRoot(document.getElementById('root')).render(
  <App title="Animal Groups" groups={animalGroups} />
)
