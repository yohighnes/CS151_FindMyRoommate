import Roommate from "./Roommate";
import { useEffect, useState } from "react";

const Roommates = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const path = `http://localhost:8080/users/usersWithMatchPercentages?emailOrUsername=${localStorage.getItem("email")}`;
        const fetchData = async () => {
          await fetch(path, { 
            method: 'GET', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then(response => {
            return response.json()
          }).then(response => {
            setUsers(response)
          });
        };
    
        fetchData();
      },[]);

    return (
        <div style={{ backgroundColor: '#FFF0DD' }}>
            {
                users.map((user, idx) => (<Roommate user={user} key={user.id} index={user.id}/>))

            }
        </div>
    )

}

export default Roommates;