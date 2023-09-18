import { NavLink } from 'react-router-dom';

const FooterTabNavigation = () => {
    return (
        <div className="flex gap-4 px-4">
            <NavLink
                to="/popular"
                className={({ isActive }: { isActive: boolean }) => {
                    return isActive ? ' underline py-2 ' : '  ';
                }}
            >
                Popular
            </NavLink>

            <NavLink
                to="/popular"
                className={({ isActive }: { isActive: boolean }) => {
                    return isActive ? ' underline py-2 ' : '  ';
                }}
            >
                Popular
            </NavLink>
            <NavLink
                to="/popular"
                className={({ isActive }: { isActive: boolean }) => {
                    return isActive ? ' underline py-2 ' : '  ';
                }}
            >
                Popular
            </NavLink>
            <NavLink
                to="/popular"
                className={({ isActive }: { isActive: boolean }) => {
                    return isActive ? ' underline py-2 ' : '  ';
                }}
            >
                Popular
            </NavLink>
            <NavLink
                to="/popular"
                className={({ isActive }: { isActive: boolean }) => {
                    return isActive ? ' underline py-2 ' : ' ';
                }}
            >
                Popular
            </NavLink>
            <NavLink
                to="/popular"
                className={({ isActive }: { isActive: boolean }) => {
                    return isActive ? ' underline py-2 ' : '  ';
                }}
            >
                Popular
            </NavLink>
            <NavLink
                to="/popular"
                className={({ isActive }: { isActive: boolean }) => {
                    return isActive ? ' underline py-2 ' : ' ';
                }}
            >
                Popular
            </NavLink>
            <NavLink
                to="/popular"
                className={({ isActive }: { isActive: boolean }) => {
                    return isActive ? ' underline py-2 ' : '  ';
                }}
            >
                Popular
            </NavLink>
        </div>
    );
};
export default FooterTabNavigation;
