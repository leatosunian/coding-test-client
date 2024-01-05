import { useNavigate } from 'react-router-dom'
import cart from '../assets/cart.png'



const HeaderSearch = () => {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {elements} = e.currentTarget
    const filter = elements.namedItem('search') as HTMLInputElement
    navigate(`/items/${filter.value}`)
    
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{width:'fit-content', height:'fit-content',display: 'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={{maxWidth: '100vw', width: '100vw', display:"flex", alignItems:"center", justifyContent:"space-evenly" }}>
            <div style={{width:'50px'}}>
                <img onClick={() => navigate('/')} src={cart} style={{width:'50px'}} alt="" />
            </div>
            <input placeholder="laptops, smartphones, ..." name='search' type="text" style={{width:'70%'}} />  
        </div>
      </form>
    </>
  )
}

export default HeaderSearch