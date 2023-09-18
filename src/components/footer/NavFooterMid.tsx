const NavFooterMid = () => {
    return (
        <div className="mt-10 pb-10 bg-light-gray">
            <hr className="text-gray-border mb-4 mt-2 m-2 w-screen " />

            <div className="flex sm:flex-col sm:gap-4 gap-64 px-8 mt-10">
                <div className="support text-gray text-sm font-normal flex flex-col gap-4">
                    <p className="font-bold">Support</p>
                    <p>Help Centre</p>
                    <p>AirCover</p>
                    <p>Anti-discrimination</p>
                    <p>Disability support</p>
                    <p>Cancellation options</p>
                    <p>Report neighbourhood concern</p>
                </div>
                {/* <hr className="hidden sm:flex text-gray-border mb-4 mt-2 mr-3 w-screen " /> */}

                <div className="hosting text-gray text-sm font-normal flex flex-col gap-4">
                    <p className="font-bold">Hosting</p>
                    <p>Airbnb your home</p>
                    <p>AirCover for Hosts</p>
                    <p>Hosting resources</p>
                    <p>Community forum</p>
                    <p>Hosting responsibly</p>
                </div>
                <hr className="hidden sm:contents text-gray-border mb-4 mt-2 m-2 w-screen " />

                <div className="airbnb text-gray text-sm font-normal flex flex-col gap-4">
                    <p className="font-bold">Airbnb</p>
                    <p>Newsroom</p>
                    <p>New features</p>
                    <p>Careers</p>
                    <p>Investors</p>
                    <p>Airbnb.org emergency stays</p>
                </div>
            </div>
            {/* <hr className="text-gray-border w-screen " /> */}
        </div>
    );
};
export default NavFooterMid;
