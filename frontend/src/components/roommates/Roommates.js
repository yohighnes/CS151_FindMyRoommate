import Roommate from "./Roommate";
import { useEffect, useState } from "react";
const users = [
    {
        pronouns: 'he/him/his',
        phone: '(000) 000-0000',
        name: 'Johnatan Smith',
        username: 'user',
        email: 'sba@sjsu.edu.com',
        pic: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
    },
    {
        pronouns: 'he/him/his',
        phone: '(000) 000-0000',
        name: 'Johnatan Smith',
        username: 'user',
        email: 'sba@sjsu.edu.com',
        pic: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
    },
    {
        pronouns: 'he/him/his',
        phone: '(000) 000-0000',
        name: 'Johnatan Smith',
        username: 'user',
        email: 'sba@sjsu.edu.com',
        pic: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
    }
]
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
            console.log(response)
            setUsers(response)
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