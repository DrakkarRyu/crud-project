import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './UsersForm.css'

const UsersForm = ({ getUsers , userSelected , selectUser}) => {

    const { register, handleSubmit, reset } = useForm();
    const defaultValues = { first_name: "", last_name: "", email: "", password: "", birthday: "" }
    const submit = data => {

    if (userSelected){
        axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
        .then(() => {
            getUsers()
            selectUser(null)
        })
        reset(defaultValues);
    }else{
        axios.post('https://users-crud1.herokuapp.com/users/', data)
            .then(() => getUsers())
        reset(defaultValues);}
    }

    useEffect(() => { 
        if (userSelected) {
            const selectUser = {
                first_name: userSelected?.first_name,
                last_name: userSelected?.last_name,
                email: userSelected?.email,
                password: userSelected?.password,
                birthday: userSelected?.birthday
            }
            reset(selectUser)
        }
    }, [userSelected, reset]);

    return (
        <div className='form'>
        <form onSubmit={handleSubmit(submit)}>
            <li>
                <label htmlFor='fist_name-input'>First Name: </label>
                <input type='text' id='first_name-input' {...register("first_name")} />
            </li>
            <li>
                <label htmlFor='last_name-input'>Last Name: </label>
                <input type='text' id='last_name-input' {...register("last_name")} />
            </li>
            <li>
                <label htmlFor='email-input'>Email: </label>
                <input type='email' id='email-input' {...register("email")} />
            </li>
            <li>
                <label htmlFor='password-input'>Password: </label>
                <input type='password' id='password-input' {...register("password")} />
            </li>
            <li>
                <label htmlFor='birthday-input'>Birthday: </label>
                <input type='date' id='birthday-input' {...register("birthday")} />
            </li>
            <button><i class="fa-solid fa-user-plus"></i></button>
        </form>
        </div>
    )
}

export default UsersForm;
