import profile from '../../../public/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-10 mx-6 border-b-2 max-w-7xl mx-auto'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" srcSet="" />
        </header>
    );
};

export default Header;