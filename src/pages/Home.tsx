import { useNavigate } from "react-router-dom"
import cart from '../assets/cart.png'

const Home = () => {
  const navigate = useNavigate()
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {elements} = e.currentTarget
    const filter = elements.namedItem('search') as HTMLInputElement

    navigate(`/items/${filter.value}`)
  }

  return (
    <div style={{width:'100vw', height:'100vh',display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <img src={cart} style={{width:'120px'}} alt="" />
      <h1>Online Shop</h1>
      <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit}>
        <input name="search" required placeholder="laptops, smartphones, ..." type="text" />
        <button>Buscar</button>
      </form>
    </div>
  )
}

export default Home