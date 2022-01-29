import { NavLink, useSearchParams } from "react-router-dom";

const dummyUsers = [
    {
        id: '1',
        name: 'User 1',
        isActive: false
    },
    {
        id: '2',
        name: 'User 2',
        isActive: true
    },
    {
        id: '3',
        name: 'User 3',
        isActive: true
    }
]

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
    return (
        <div>
            <div>
                <button onClick={() => setSearchParams({})}>All Users</button>
                <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
            </div>
            <div>
                Status: { showActiveUsers ? 'Active Users' : 'All Users' }
            </div>
            <nav>
                {

                    dummyUsers
                        .filter((user) => showActiveUsers ? user.isActive : true)
                        .map((user) => {
                            return <NavLink key={user.id} to={user.id}>{user.name}</NavLink>
                        })
                }
            </nav>
        </div>
    );
}
 
export default Users;