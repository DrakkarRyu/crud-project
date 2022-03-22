import axios from 'axios';
import { useForm } from 'react-hook-form';

const UsersForm = ({ getUsers }) => {

    const { register, handleSubmit, reset } = useForm();
    const defaultValues = { first_name: "", last_name: "", email: "", password: "", birthday: "" }
    const submit = data => {
        console.log(data)
        axios.post('https://users-crud1.herokuapp.com/users/', data)
            .then(() => getUsers())
        reset(defaultValues);
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor='fist_name-input'>First Name </label>
                <input type='text' id='first_name-input' {...register("first_name")} />
            </div>
            <div>
                <label htmlFor='last_name-input'>Last Name </label>
                <input type='text' id='last_name-input' {...register("last_name")} />
            </div>
            <div>
                <label htmlFor='email-input'>Email </label>
                <input type='email' id='email-input' {...register("email")} />
            </div>
            <div>
                <label htmlFor='password-input'>Password </label>
                <input type='password' id='password-input' {...register("password")} />
            </div>
            <div>
                <label htmlFor='birthday-input'>Birthday </label>
                <input type='date' id='birthday-input' {...register("birthday")} />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default UsersForm;