import './App.css'
import { sampleProducts } from './data';
import { Product } from "./types/Product"


const showData = (product:Product) => {
  return (
    <li key ={`${product.price} + id`}>
        <img className='product-image' src={product.image}></img>
        <p>{product.name}</p>
        <h2>{product.price}</h2>
    </li>
  )}

function App() {

  return (
   <div>
    <main>
      <ul>
        {sampleProducts.map(showData)}
      </ul>
      
    </main>
    <footer>i am ok </footer>
   </div>
  )
}

export default App
