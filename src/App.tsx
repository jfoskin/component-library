
import './App.css'
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard'

function App() {
  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer'
  }

  return (
    <>
<h1>hello</h1>

      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      >
        <p className="text-sm text-gray-500">Last login: 2 hours ago</p>
      </UserProfileCard>
    </>
  )
}

export default App
