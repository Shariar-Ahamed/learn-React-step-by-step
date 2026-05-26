import './App.css'
import Products from './components/Products/Products'

function App() {

  // const products = {
  //   name: 'Nokia',
  //   price: 1000
  // }

  // const arrays = ['Shariar', 'Rakib', 'Sakib', 'Arafat']


    const phones = [
    { name: 'Nokia', price: 1000 },
    { name: 'Samsung', price: 2000 },
    { name: 'Iphone', price: 3000 },
    { name: 'Xiaomi', price: 4000 }
  ] 

 

  return (
    <>
    {/* <Products ManyProducts = {products}/> */}

    {/* <Products ManyArray = {arrays}/> */}

    {/* <Products ManyObj = {phones}/>  */}

    {
      phones.map(SinglePhone => <Products ManyLoop = {SinglePhone}/>)
    }

    </>
  )
}

export default App
