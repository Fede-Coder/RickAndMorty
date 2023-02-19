import React from "react";
import { FormBoxLogin, FormButton, FormDivBG, FormDivContainer, FormForm, FormInput, FormDivLogin, FormDivError, FormP, FormImgLogo} from "./StyleForm";
import { validation } from "./validation";
import logoRM from '../../assets/img/logo.png'
import { toast } from "react-toastify";


export default function Form(props) {
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({ });

    const notify = (message, error = false) => {
        if(error) {
            toast.error(message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000
            })
        } else {
            toast.success(message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000
            })
        }
    }

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
            notify('Error! Los campos estan incorrectos', true)
        }
    }
    
    React.useEffect(() => {
        setErrors(validation({...userData}))
    }, [userData]);
    
    return (
        <FormDivContainer>
            <FormBoxLogin>
                <FormDivBG/>
                <FormForm onSubmit={handleSubmit} autoComplete="off">
                    <FormImgLogo draggable={false} src={logoRM} alt={'logo-rick-morty'} />
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