# Link & NavLink Usage

## `Link` vs `NavLink`

| Link | NavLink |
| --- | --- |
| An element that lets the user navigate to another page by clicking or tapping on it | A special kind of `Link` that knows whether or not it is "active" |

## `NavLink` default add `active` class

By default, an `active` class is added to a `<NavLink>` component when it is active.
You can pass a function to either style or className that will allow you to customize the inline styling or the class string based on the component's active state.

Implement
- Add style for `active` class by CSS
```css
/* Add active style by CSS */
nav a.active {
    font-weight: bold;
}
```
- Or CSS in JS solution 
```javascript
// In component
export const Nav = () => {
    const navlinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }

    return (
        <nav>
            <NavLink style={navlinkStyles} to="/">Home</NavLink>
        </nav>
    )
}
```