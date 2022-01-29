import { NavLink } from "react-router-dom";
import { useAuth } from "../auth";

const Navbar = () => {
    const navlinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
    const auth = useAuth()

    return (
        <nav>
            <NavLink style={navlinkStyles} to="/">Home</NavLink>
            <NavLink style={navlinkStyles} to="about">About</NavLink>
            <NavLink to="nested-route">Nested Route</NavLink>
            <NavLink to="users">Users</NavLink>
            <NavLink to="big-chunk">Big Chunk</NavLink>
            <NavLink to="profile">Profile</NavLink>
            {
                !auth.user &&
                <NavLink to="login">Login</NavLink>
            }
        </nav>
    );
}
export default Navbar;