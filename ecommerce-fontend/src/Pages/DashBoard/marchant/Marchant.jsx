import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../Feature/userSlice/userSlice";

const Marchant = () => {
  const { users, isLoading, isError, error } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
 
  return (
    <div className=''>
      <h1>marchants</h1>
      <ul>
        {
          users?.data?.map((user, index)=>(
            
              user.role=== "marchant"
              &&
              <li key={user._id} >{index+1}.{user?.name}</li>
              
            
            
          ))
        }
      </ul>
    </div>
  );
};

export default Marchant;
