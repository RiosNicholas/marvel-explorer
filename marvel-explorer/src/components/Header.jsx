import MarvelLogo from '../assets/marvel.png'
const Header = () => {
    return (
        <div className='flex sm:flex-col sm:items-center justify-center text-center align-middle px-4 py-2'>
            <img className='lg:h-12 w-24 m-1' src={MarvelLogo}></img>
            <h1 className='lg:text-4xl text-3xl font-black m-1'>Marvel Explorer</h1>
        </div>
    );
}

export default Header;