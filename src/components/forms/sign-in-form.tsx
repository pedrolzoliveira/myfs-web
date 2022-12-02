import { Form, Button, Input, Col } from "antd"
import Title from "antd/es/typography/Title"
import { useRouter } from "next/router"
import { useSignIn } from "../../hooks/user-hooks"

export const SignInForm = () => {
    const { mutateAsync: signIn } = useSignIn()
    const { push } = useRouter()

    const onFinish = (values: any) => {
        signIn(values)
        .then(() => {
            localStorage.setItem('IS_LOGGED_IN', '1')
            push('/')
        })
    }

    return (
        <Form
            initialValues={{ email: '', password: '' }}
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
        >
            <Col span={8} offset={8}>
                <Title>Login</Title>
            </Col> 
            <Form.Item
              label='Email'
              name='email'
              rules={[{required: true, message: 'Required', whitespace: false }]}>
                <Input type="email" />
            </Form.Item>
            <Form.Item
                label="Senha"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password type="password"/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Entrar
                </Button>
            </Form.Item>
        </Form>
    )
}