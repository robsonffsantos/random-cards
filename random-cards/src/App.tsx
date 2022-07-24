import Router from './routes/router'
import UserProvider from './context/GlobalStateContext'

const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  )
}

export default App
