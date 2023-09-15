import { SiAirbnb } from 'react-icons/si';

const AirbnbLogo = () => {
    return (
        <div className="flex justify-center items-center gap-2 text-secondary text-2xl font-semibold">
            <SiAirbnb className="text-4xl" />
            <p>airbnb</p>
        </div>
    );
};
export default AirbnbLogo;
