import { NavLink, Outlet } from "react-router-dom";

const NestedRoute = () => {
    return (
        <>
            <h1>NestedRoute</h1>
            <nav>
                <NavLink to="nested-one">Go To Nested One</NavLink>
                <NavLink to="nested-two">Go To Nested Two</NavLink>
            </nav>
            <Outlet />
        </>
    );
}
 
export default NestedRoute;