import {
    BiGlobe,
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoTwitter,
} from 'react-icons/bi';

const Footer = () => {
    return (
        <div className="px-2 mt-2 py-2">
            <hr className="text-gray-border mx-6  " />

            <footer className="text-gray text-sm flex px-6 mt-6 justify-between">
                {/* privacy policy navigation */}
                <div className="content flex gap-2">
                    <p>© 2023 Airbnb, Inc.</p>
                    <ul
                        role="list"
                        className="marker:text-gray  pl-1 flex gap-4"
                    >
                        <li>
                            <a href="">Privacy</a>
                        </li>
                        <li>
                            <a href="">Terms</a>
                        </li>
                        <li>
                            <a href="">Sitemap</a>
                        </li>
                        <li>
                            <a href="">Company details</a>
                        </li>
                    </ul>
                </div>

                {/* navlinks in footer */}
                <div className="links flex gap-4">
                    {/* english button */}
                    <div className="eng-rs flex gap-2 text-black ">
                        <button className="flex justify-center items-center gap-1 hover:underline">
                            <BiGlobe />
                            <p>English(IN)</p>
                        </button>
                        <button>INR</button>
                    </div>
                    {/* social links */}
                    <div className="social-links flex gap-4 text-xl">
                        <a href="">
                            <BiLogoFacebook className="bg-black text-white" />
                        </a>
                        <a href="">
                            <BiLogoTwitter className="bg-black text-white" />
                        </a>
                        <a href="">
                            <BiLogoInstagram className="bg-black text-white" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;
