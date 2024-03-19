import './banner.css'
import banner from '../../imagens/HeaderHeader_total.png';
function Banner() {
    return (
        <header className='banner'>
            <img src={banner} alt="Banner principal da página do Organo" />
        </header>
        
    )
}

export default Banner;