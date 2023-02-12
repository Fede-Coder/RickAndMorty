import React from "react";
import { FormBoxLogin, FormButton, FormDivBG, FormDivContainer, FormForm, FormInput, FormDivLogin} from "./StyleForm";
import { validation } from "./validation";


export default function Form(props) {
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({ username: '', password: ''});

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
        }
    }

    console.log(errors);
    return (
        <FormDivContainer>
            <FormBoxLogin>
                <FormDivBG/>
                <FormForm onSubmit={handleSubmit}>
                    <FormDivLogin>
                        <FormInput type={'text'} name={'username'} value={userData.username} placeholder={'Username'} onChange={handleInputChange}></FormInput>
                    </FormDivLogin>
                    <FormDivLogin>
                        <FormInput type={'text'} name={'password'} value={userData.password} placeholder={'Passsword'} onChange={handleInputChange}></FormInput>
                    </FormDivLogin>                    
                    <FormButton>Sign In</FormButton>
                </FormForm>
            </FormBoxLogin>
        </FormDivContainer>
    )
}