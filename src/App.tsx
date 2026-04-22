
import './App.css'
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard'
import  ProductDisplay from './components/ProductDisplay/ProductDisplay'

function App() {
  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer'
  }
  const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://example.com/headphones.jpg',
  inStock: true
};

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

    <ProductDisplay
      product={product}
      showDescription={true}
      showStockStatus={true}
      onAddToCart={(productId: string) => alert(`Added product ${productId} to cart`)}
    >
  <div className="text-sm text-gray-500">
    Free shipping available
  </div>
</ProductDisplay>

    </>
  )
}

export default App
