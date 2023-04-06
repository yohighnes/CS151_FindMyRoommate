import Roommate from "./Roommate";
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

    return (
        <div className="vh-100" style={{ backgroundColor: '#FFF0DD' }}>
            {
                users.map((user, idx) => (<Roommate user={user} key={idx} />))

            }
        </div>
    )

}

export default Roommates;