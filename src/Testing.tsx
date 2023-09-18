import { Footer } from './components';
import CardContainer from './components/card/CardContainer';
import FooterTabNavigation from './components/footer/FooterTabNavigation';
import NavFooterMid from './components/footer/NavFooterMid';
import Navbar from './components/header/Navbar';
import TopNavList from './components/header/TopNavList';

const Testing = () => {
    return (
        <div>
            <Navbar />
            <TopNavList />
            <CardContainer />
            {/* <FooterTabNavigation/> */}
            <NavFooterMid />
            <Footer />
        </div>
    );
};
export default Testing;
