import MarvelLogo from '../assets/marvel.png'
const Header = () => {
    return (
        <div className='flex justify-center align-middle px-4 py-2'>
            <img className='lg:h-12 h-10 w-auto m-1' src={MarvelLogo}></img>
            <h1 className='lg:text-4xl text-3xl font-black m-1'>Marvel Explorer</h1>
        </div>
    );
}

export default Header;