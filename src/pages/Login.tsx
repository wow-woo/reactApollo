import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { reactiveVar } from "../apollo-client";
import {FormError} from '../components/FormError'
import {loginClient, loginClientVariables} from '../gqlTypes/loginClient'

const LOGIN_MUTATION = gql`
    mutation loginClient($loginInp: LoginInput!){
        login(input:$loginInp){
            ok
            error
            token
        }
    }
`

interface ILoginForm {
    email:string;
    password:string
}

const submitFailed = ()=>{

}
export function Login() {
    const {register, getValues, errors, handleSubmit, watch} = useForm<ILoginForm>();
    const [loginMutation, {loading, error, data} ] = useMutation<loginClient, loginClientVariables>(
        LOGIN_MUTATION,
        {
            onCompleted:(data:loginClient)=>{
                const {login:{ok, error, token}} = data
                if(ok && token){
                    window.localStorage.setItem('token', token)
                    reactiveVar(true)
                }
            }
        }
    )

    const submitPassed =()=>{
        console.log(loading)
        if(!loading){
            const {email, password} = getValues()
            loginMutation({
                variables:{
                    loginInp:{
                        email,
                        password
                    }
                }
            })
        }
    }
    return (
        <div className='w-screen h-screen bg-gray-800 flex items-center justify-center'>
            <div className="bg-white w-full max-w-lg py-5 rounded-lg text-center">
                <h3 className="text-2xl text-gray-800">
                    LOG IN
                <form method='POST' 
                onSubmit={handleSubmit(submitPassed, submitFailed)}
                className='grid gap-5 mt-5 px-5'>
                    <input name='email' ref={register({
                        required:'Email is required',
                    })} required className='bg-gray-100 shadow-inner border border-green-600 py-3 px-5 rounded-lg mb-3' type="email"/>
                    {errors.email?.message && <FormError errorMsg={errors.email?.message}/> }
                    
                    <input name='password' ref={register({
                        required:'Password is required',
                        minLength:4
                    })} required className='bg-gray-100 shadow-inner border border-green-600 py-3 px-5 rounded-lg' type="password"/>
                    {errors.password?.message && <FormError errorMsg={errors.password?.message}/> }
                    {errors.password?.type ==='minLength' && <FormError errorMsg={"Password should longer than 10 characters"}/> }
                    <button className='bg-gray-800 text-white p-3 text-lg mt-3 hover:opacity-30'>
                        {loading ? 'loading...' : 'Login'}
                    </button>
                    {data?.login.error && <FormError className='text-center' errorMsg={data.login.error}/>}
                </form> 
                </h3>
            </div>
        </div>
    )
}

