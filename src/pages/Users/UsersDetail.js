import { useNavigate, useParams } from "react-router-dom";

const UsersDetail = () => {
    const navigate = useNavigate()
    const params = useParams()
    const { userId } = params
    return (
        <div>
            <button onClick={() => navigate('/users')}>Go Back To Users</button>
            Users Detail for user {userId}
        </div>
    );
}
 
export default UsersDetail;