import { BiSearch } from 'react-icons/bi';

const NavbarMain = () => {
    return (
        <div className="flex justify-center gap-4 items-center text-sm shadow-md border border-gray-border rounded-full  px-4 py-2 hover:shadow-lg hover:shadow-gray-border">
            <button>Anywhere</button>
            <div className="bg-gray-border w-[1px] p-[0.5px] h-5"></div>
            <button>Any week</button>
            <div className="bg-gray-border w-[1px] p-[0.5px] h-5"></div>
            <button className="text-grayText ">Add guests</button>
            <button>
                <BiSearch className="bg-secondary p-2 text-3xl  rounded-full text-white" />
            </button>
        </div>
    );
};

export default NavbarMain;
