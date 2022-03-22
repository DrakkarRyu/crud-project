import axios from "axios";
import { useEffect, useState } from "react";
import UsersForm from "./Components/UsersForm";
import UsersList from "./Components/UsersList";
//import { useForm } from 'react-hook-form';

function App() {

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState (null);
  //const {reset} = useForm ();
  console.log (userSelected)
/*
  const autoFill = () => {
		reset({
				email: userSelected.email,
				password: userSelected.password,
        first_name: userSelected.first_name,
        last_name: userSelected.last_name,
        birthday: userSelected.birthday
		})
} */

  useEffect(() => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsers(res.data));
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  }
  const selectUser = user => setUserSelected (user) 

  return (
    <div className="App">
      <UsersForm getUsers={getUsers} userSelected={userSelected}/>
      <UsersList users={users} selectUser={selectUser}/>
    </div>
  );
}

export default App;
