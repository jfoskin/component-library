import { useState } from 'react';
import './App.css'
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard'
import  ProductDisplay from './components/ProductDisplay/ProductDisplay'
import { AlertBox } from './components/AlertBox/AlertBox';

function App() {

  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);
 
  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };
  
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

    {/* my initial connect test */}
      <h1>hello</h1>
    {/* conditional rendering for the alert box */}
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      >
        {/* this is a children prop */}
        <p className="text-sm text-gray-500">Last login: 2 hours ago</p>
      </UserProfileCard>

    <ProductDisplay
      product={product}
      showDescription={true}
      showStockStatus={true}
      onAddToCart={handleAddToCart}
    >
  <div className="text-sm text-gray-500">
    Free shipping available
  </div>
</ProductDisplay>

    </>
  )
}

export default App
