import { ErrorMessage, Field, Form, Formik,  } from "formik"
import { useCreateFolder } from "../../hooks/folder-hooks"
import * as Yup from 'yup'
import { AxiosError } from "axios"


const createFolderSchema = Yup.object().shape({
    name: Yup.string().required('Required')
})

export const CreateFolderForm = () => {
    const { mutateAsync: createFoldder } = useCreateFolder()

    return (
        <Formik initialValues={{
            name: ''
        }}
        onSubmit={(values, helpers) => {
            createFoldder(values)
            .catch(e => {
                if (e instanceof AxiosError && e.response?.status === 409) {
                    helpers.setErrors({
                        name: 'Name is already being used in folder'
                    })
                } else {
                    throw e
                }
            })
        }}
        validationSchema={createFolderSchema}
        >
            <Form className='flex flex-col'>
                <label htmlFor='name'>name</label>
                <Field id='name' name='name' type='text'/>
                <ErrorMessage name='name'/>
                <button type='submit'>Entrar</button>
            </Form>
            
        </Formik>
    )
}