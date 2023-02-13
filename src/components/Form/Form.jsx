import React from "react";
import { FormBoxLogin, FormButton, FormDivBG, FormDivContainer, FormForm, FormInput, FormDivLogin, FormDivError, FormP} from "./StyleForm";
import { validation } from "./validation";


export default function Form(props) {
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({ });

    const handleInputChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
        setErrors(
            validation({
                ...userData,
                [e.target.name]:  e.target.value,
            })
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(errors).length === 0) {
            props.login(userData)
        } else {
            //Modificar
            alert('Error!')
        }
    }

    console.log(errors);
    console.log(Object.keys(errors));
    return (
        <FormDivContainer>
            <FormBoxLogin>
                <FormDivBG/>
                <FormForm onSubmit={handleSubmit} autoComplete="off">
                    <h1>Rick & Morty</h1>
                    <FormDivLogin>
                        <FormInput type={'text'} name={'username'} value={userData.username} placeholder={'Username'} onChange={handleInputChange}></FormInput>
                    </FormDivLogin>
                    <FormDivLogin>
                        <FormInput type={'text'} name={'password'} value={userData.password} placeholder={'Password'} onChange={handleInputChange}></FormInput>
                    </FormDivLogin>                    
                    <FormButton>Login</FormButton>
                    {(Object.keys(errors).length > 0)
                    ? 
                    <FormDivError>
                        <ul>
                            <FormP error={errors.username}>{errors.username}</FormP>
                            <FormP error={errors.password}>{errors.password}</FormP>
                        </ul>
                    </FormDivError> 
                    : ''
                    }
                </FormForm>
            </FormBoxLogin>
        </FormDivContainer>
    )
}