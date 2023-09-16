import { d1, d2, d3, d4 } from '../../assets';
import ImageCard from './ImageCard';
const CardContainer = () => {
    return (
        <div className="flex flex-wrap gap-6 p-2  justify-center">
            <ImageCard
                {...{
                    name: 'Jibhi, India',
                    url: d1,
                    date: '16-21 Sep',
                    price: 34456,
                    height: '332 Kilometer away',
                }}
            />
            <ImageCard
                {...{
                    name: 'Ranchi, India',
                    url: d2,
                    date: '19-21 Sep',
                    price: 34456,
                    height: '332 Kilometer away',
                }}
            />

            <ImageCard
                {...{
                    name: 'Jibhi, India',
                    url: d3,
                    date: '16-21 Sep',
                    price: 34456,
                    height: '332 Kilometer away',
                }}
            />

            <ImageCard
                {...{
                    name: 'Jibhi, India',
                    url: d4,
                    date: '16-21 Sep',
                    price: 34456,
                    height: '332 Kilometer away',
                }}
            />

            <ImageCard
                {...{
                    name: 'Jibhi, India',
                    url: d1,
                    date: '16-21 Sep',
                    price: 34456,
                    height: '332 Kilometer away',
                }}
            />

            <ImageCard
                {...{
                    name: 'Jibhi, India',
                    url: d2,
                    date: '16-21 Sep',
                    price: 34456,
                    height: '332 Kilometer away',
                }}
            />
            <ImageCard
                {...{
                    name: 'Jibhi, India',
                    url: d3,
                    date: '16-21 Sep',
                    price: 34456,
                    height: '332 Kilometer away',
                }}
            />

            <ImageCard
                {...{
                    name: 'Jibhi, India',
                    url: d1,
                    date: '16-21 Sep',
                    price: 34456,
                    height: '332 Kilometer away',
                }}
            />
        </div>
    );
};
export default CardContainer;
