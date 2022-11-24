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
            .then(() => push('/'))
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
            <Form className='flex flex-col'>
                <label htmlFor='email'>email</label>
                <Field id='email' name='email' type='email'/>
                <ErrorMessage name='email'/> 
                <label htmlFor='password'>password</label>
                <Field id='password' name='password' type='password'/>
                <ErrorMessage name='password'/> 
                <button type='submit'>Entrar</button>
            </Form>
            
        </Formik>
    )
}