import { ErrorMessage, Field, Form, Formik,  } from "formik"
import { useCreateFolder } from "../../hooks/folder-hooks"
import * as Yup from 'yup'


const createFolderSchema = Yup.object().shape({
    name: Yup.string().required('Required')
})

export const CreateFolderForm = () => {
    const { mutateAsync: createFoldder } = useCreateFolder()

    return (
        <Formik initialValues={{
            name: ''
        }}
        onSubmit={async (values) => {
            const folder = await createFoldder(values)
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