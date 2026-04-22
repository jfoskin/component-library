import type { ProductDisplayProps } from "../../types"

function ProductDisplay({
  product,
  onAddToCart,
  showStockStatus,
  showDescription,
  children
}: ProductDisplayProps) {
  return (
    <section className="mx-auto mt-6 w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="mb-4 h-48 w-full rounded-xl object-cover"
        />
      )}

      <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
      <p className="mt-1 text-lg font-medium text-gray-700">${product.price}</p>

      {showDescription && (
        <p className="mt-3 text-sm text-gray-600">{product.description}</p>
      )}

      {showStockStatus && (
        <p className="mt-2 text-sm text-gray-500">
          {product.inStock ? "In stock" : "Out of stock"}
        </p>
      )}

      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-4 rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
        >
          Add to Cart
        </button>
      )}

      {children && <div className="mt-4 border-t border-gray-100 pt-3">{children}</div>}
    </section>
  )
}

export default ProductDisplay