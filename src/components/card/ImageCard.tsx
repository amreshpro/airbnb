import { heart } from '../../assets';

interface ImageCardProps {
    url: string;
    name: string;
    date: string;
    price: number;
    height: string;
}

const ImageCard = ({ url, name, date, price, height }: ImageCardProps) => {
    return (
        <div className=" flex flex-col gap-2 text-sm">
            <div className="img sticky">
                <img
                    src={url}
                    alt={name}
                    className="w-[300px] h-[280px] rounded-2xl"
                />
                <img
                    src={heart}
                    alt="heart"
                    className="w-6 h-6 z-50 absolute  top-4 right-4   "
                />
            </div>

            <div className="details flex flex-col gap-1">
                <h3 className="font-semibold">{name}</h3>
                <p className="text-gray">{height}</p>
                <p className="text-gray">{date}</p>
                <h4 className="flex gap-1">
                    <p className="font-semibold">₹{price}</p> <p> night</p>
                </h4>
            </div>
        </div>
    );
};
export default ImageCard;
