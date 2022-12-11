import { Button, Form, Input, Modal } from "antd"
import { useCreateFolder } from "../../hooks/folder-hooks"

type CreateFolderModalProps = {
    isOpen?: boolean,
    onClose: Function
}

export const CreateFolderModal = ({ isOpen, onClose }: CreateFolderModalProps) => {

    const { mutateAsync: create } = useCreateFolder()

    const onFinish = (values: any) => {
        create(values)
        .then(_ => {
            onClose();
        })
    }

    return (
        <Modal
          title='Criar Pasta'
          open={isOpen}
          footer={[
            <Button key='cancel-button' onClick={() => onClose()}>Cancelar</Button>,
            <Button type="primary" htmlType="submit" key='create-button'>Criar</Button>,
          ]}>
            <Form
              initialValues={{ name: '' }}
              onFinish={onFinish}
            >
                <Form.Item
                  label='Nome'
                  name='name'
                  rules={[{required: true, message: 'Required', whitespace: false}]}>
                    <Input type='text'/>
                </Form.Item>
            </Form>
        </Modal>
    )
}