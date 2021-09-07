import React, {useState} from 'react';
import styled from 'styled-components';

const Formulario = styled.form`
    padding: 0 4rem;
`

const LoginOptionContainer = styled.div`
    text-align: center;
`

const OrWithMail = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 1rem;
`
const DataInputContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const RememberAndForgotContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const SubmitContainer = styled.div`
    text-align: center;
`


const LoginForm = () => {
    //Estado del usuario que se quiere loguear
    const [dataUser, setDataUser] = useState({
        email: "",
        password: ""
    })
    //Estado error anto posible situaciones que genere el usuario
    const [error, setError] = useState(false);

    const loginWithGoogle = () => {
        console.log("Te vas a loguear con google")
    }
    const onChangeInput = (e) => {
        setDataUser({
            ...dataUser,
                [e.target.name]: e.target.value
            }
        )
    }
    const onSubmitLogin = (e) => {
        e.preventDefault();
        console.log("Te estas logueando guachin");
        //Tenemos que validar que el usuario este colocando todos los campos
        console.log(dataUser.email, dataUser.password)
        if(dataUser.email === "" || dataUser.password===""){
            setError(true);
        }else{
            setError(false);
        }
    }
    return (  
        <Formulario action="" onSubmit={onSubmitLogin}>
            <div>
                <h1>Login</h1>
                <p>Nunca dejes de aprender, mantente enseñable</p>
            </div>
            <LoginOptionContainer>
                <button
                    type="button"
                    onClick={loginWithGoogle}
                >
                    Sign in with Google
                </button>
                <OrWithMail>
                    <hr />
                    <p>or Sign in with email</p>
                    <hr />
                </OrWithMail>
            </LoginOptionContainer>
            <div>
                {error ? <p>todos los campos son obligatorios</p> : null}
                <DataInputContainer>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={onChangeInput}/>
                </DataInputContainer>
                <DataInputContainer>
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" name="password" onChange={onChangeInput}/>
                </DataInputContainer>
                <RememberAndForgotContainer>
                    <div>
                        <input type="checkbox" value="lsRememberMe" id="rememberMe"/> 
                        <label for="rememberMe">Remember me</label>
                    </div>
                    <p>Forget Password?</p>
                </RememberAndForgotContainer>
            </div>
            <SubmitContainer>
                <input type="submit" value="LOGIN"/>
                <p>Not registered yet? <a>Create an account</a></p>
            </SubmitContainer>
        </Formulario>
    );
}
 
export default LoginForm;