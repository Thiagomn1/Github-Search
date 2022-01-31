import { useContext } from 'react'
import Spinner from '../layouts/Spinner'
import User from './User'
import GithubContext from '../../context/github/GithubContext'

function UserList() {

    const {Users, Loading} = useContext(GithubContext)

    if(!Loading) {
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4'>
                {Users.map(user => <User key={user.id} user={user} />)}
            </div>
        )
    } 
    else {
        return <Spinner />
    }
}

export default UserList
