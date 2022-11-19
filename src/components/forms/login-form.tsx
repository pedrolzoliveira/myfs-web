import { Field, Form, Formik,  } from "formik"

export const LoginForm = () => {
    return (
        <Formik initialValues={{
            email: '',
            password: ''
        }}
        onSubmit={(values) => {
        }}
        >
            <Form>
                <Field id='email' name='email' type='email'/>
                <Field id='password' name='password' type='password'/>
                <button type='submit'>Entrar</button>
            </Form>
        </Formik>
    )
}