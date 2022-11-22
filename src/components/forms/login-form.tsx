import { Field, Form, Formik,  } from "formik"
import { useRouter } from "next/router"
import { useSignIn } from "../../hooks/user-hooks"

export const LoginForm = () => {
    const { mutateAsync: signIn } = useSignIn()
    const { push } = useRouter()

    return (
        <Formik initialValues={{
            email: '',
            password: ''
        }}
        onSubmit={async (values) => {
            const user = await signIn(values)
            await push('/')
        }}
        >
            <Form className='flex flex-col'>
                <label htmlFor='email'>email</label>
                <Field id='email' name='email' type='email'/>
                <label htmlFor='password'>password</label>
                <Field id='password' name='password' type='password'/>
                <button type='submit'>Entrar</button>
            </Form>
        </Formik>
    )
}