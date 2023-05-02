import Roommate from "./Roommate";
import { useEffect, useState } from "react";

const Roommates = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const path = `http://localhost:8080/users/all`;
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

            const condition = (user) => {
              if(localStorage.getItem("email") !== null) {
                return user.email !== localStorage.getItem("email");
              } else {
                return user.userName !== localStorage.getItem("username");
              }
            }
            const newA = response.filter(user => condition(user));
            console.log(newA)
            setUsers(newA)
          });
        };
    
        fetchData();
      },[]);

    return (
        <div style={{ backgroundColor: '#FFF0DD' }}>
            {
                users.map((user, idx) => (<Roommate user={user} key={idx} index={idx}/>))

            }
        </div>
    )

}

export default Roommates;