import './App.css'
import { Button } from './components/Button'
import { MessageSquare } from 'lucide-react'

function App() {

  return (
    <>
      <Button icon={<MessageSquare />} variant={"primary"} />
    </>
  )
}

export default App
