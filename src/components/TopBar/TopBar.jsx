import './TopBar.css'


export default function TopBar() {
  return (
    <div className='TopBar'>
      <div className='TopBarContainer'>
        <div className='TopBarIcon'> 
        <img src='logo.png' alt='Logo' className='logo' href='/#' width='80%' height='80%' />
        </div>
        <div className='MenuBar'>
          <a href='/'> Home </a>
          <a href='/CurrentState'> Estado Atual </a>
          <a href='/ProductHandler'> Gerenciar Produtos </a>
          <a href='/ShelfHandler'> Gerenciar Prateleiras </a>
        </div>
      </div>
    </div>
  )
}
