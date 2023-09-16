import { i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11 } from '../../assets/';

const TopNavList = () => {
    return (
        <div className="flex gap-6 px-6 text-gray text-center text-sm justify-between my-2 ">
            <button className="flex flex-col items-center gap-1">
                <img src={i1} alt="i1" className="w-8 h-8" /> <p>Farms</p>
            </button>
            <button className="flex flex-col items-center gap-1">
                <img src={i2} alt="i2" className="w-8 h-8" />{' '}
                <p>Amazing pools</p>
            </button>
            <button className="flex flex-col items-center gap-1">
                <img src={i3} alt="i3" className="w-8 h-8" />{' '}
                <p>Bed and Breakfast</p>
            </button>
            <button className="flex flex-col items-center gap-1">
                <img src={i4} alt="i4" className="w-8 h-8" /> <p>New</p>
            </button>
            <button className="flex flex-col items-center gap-1">
                <img src={i5} alt="i5" className="w-8 h-8" /> <p>Domes</p>
            </button>
            <button className="flex flex-col items-center gap-1">
                <img src={i6} alt="i6" className="w-8 h-8" /> <p>Rooms</p>
            </button>
            <button className="flex flex-col items-center gap-1">
                <img src={i7} alt="i7" className="w-8 h-8" /> <p>Beach</p>
            </button>
            <button className="flex flex-col items-center gap-1">
                <img src={i8} alt="i8" className="w-8 h-8" /> <p>OMG!</p>
            </button>
            <button className="flex flex-col items-center gap-1">
                <img src={i9} alt="i9" className="w-8 h-8" /> <p>Lakefront</p>
            </button>
            <button className="flex flex-col items-center gap-1">
                <img src={i10} alt="i10" className="w-8 h-8" /> <p>Cabins</p>
            </button>
            <button className="flex flex-col items-center gap-1">
                <img src={i11} alt="i11" className="w-8 h-8" /> <p>Luxe</p>
            </button>
        </div>
    );
};
export default TopNavList;
