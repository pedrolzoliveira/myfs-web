import { ErrorMessage, Field, Form, Formik, yupToFormErrors,  } from "formik"
import { useRouter } from "next/router"
import { useSignIn } from "../../hooks/user-hooks"
import { AxiosError } from "axios"
import * as Yup from 'yup'

const signInSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Required'),
    password: Yup.string().min(3, 'Too short').required('Required')
})

export const SignInForm = () => {
    const { mutateAsync: signIn } = useSignIn()
    const { push } = useRouter()

    return (
        <Formik initialValues={{
            email: '',
            password: ''
        }}
        validationSchema={signInSchema}
        onSubmit={(values, helpers) => {
            signIn(values)
            .then(() => {
                localStorage.setItem('IS_LOGGED_IN', '1')
                push('/')
            })
            .catch(e => {
                if (e instanceof AxiosError && e.response?.status === 404) {
                    helpers.setErrors({
                        email: 'User not found'
                    })
                } else {
                    throw e
                }
            })
        }}
        >
            <Form className='flex flex-col space-y-2 w-1/2'>
                <h1 className="mb-4 text-xl font-light">Login</h1>
                <label htmlFor='email'>Email</label>
                <Field className='border rounded p-2'
                  id='email'
                  name='email'
                  type='email'/>
                <ErrorMessage
                  name='email'
                  component={'p'}
                  className='text-red-600'/> 
                <label htmlFor='password'>Senha</label>
                <Field className='border rounded p-2'
                  id='password'
                  name='password'
                  type='password'/>
                <ErrorMessage
                  name='password'
                  component={'p'}
                  className='text-red-600'/> 
                <button className='p-2 border rounded bg-blue-500 text-white'
                  type='submit'>Entrar</button>
            </Form>
            
        </Formik>
    )
}