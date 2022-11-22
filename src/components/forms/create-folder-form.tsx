import { Field, Form, Formik,  } from "formik"
import { useCreateFolder } from "../../hooks/folder-hooks"

export const CreateFolderForm = () => {
    const { mutateAsync: createFoldder } = useCreateFolder()

    return (
        <Formik initialValues={{
            name: ''
        }}
        onSubmit={async (values) => {
            const folder = await createFoldder(values)
        }}
        >
            <Form className='flex flex-col'>
                <label htmlFor='name'>name</label>
                <Field id='name' name='name' type='text'/>
                <button type='submit'>Entrar</button>
            </Form>
        </Formik>
    )
}