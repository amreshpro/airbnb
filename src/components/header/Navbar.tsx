import AirbnbLogo from './AirbnbLogo';
import NavbarMain from './NavbarMain';
import { BiGlobe, BiMenu } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    return (
        <>
            <div className=" flex justify-between items-center gap-3 px-8 py-4">
                <AirbnbLogo />
                <NavbarMain />

                <div className="ham-menu flex justify-center items-center gap-4 ">
                    <a
                        href="/"
                        className="sm:hidden hover:bg-light-gray rounded-2xl px-4 py-2"
                    >
                        Airbnb your home
                    </a>
                    <a href="/" className="sm:hidden">
                        <BiGlobe className="text-4xl text-gray rounded-full hover:bg-light-gray px-2 py-2" />
                    </a>
                    <button className="flex justify-center gap-2 items-center border border-gray-border rounded-3xl px-2 py-1 hover:shadow-lg hover:shadow-gray-border ">
                        <BiMenu className="text-xl text-gray" />
                        <CgProfile className="text-3xl text-gray" />
                    </button>
                </div>
            </div>
            <hr className="text-gray-border w-screen " />
        </>
    );
};
export default Navbar;
