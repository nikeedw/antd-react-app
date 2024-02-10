import { Button, Checkbox, Form, Input } from 'antd';
import { FC } from 'react'
import { rules } from '../utils/rules';

type FieldType = {
	username?: string;
	password?: string;
	remember?: string;
};

const LoginForm: FC = () => {

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			autoComplete="off"
		>
			<Form.Item<FieldType>
				label="Username"
				name="username"
				rules={[rules.required('Please input your username!')]}
			>
				<Input />
			</Form.Item>

			<Form.Item<FieldType>
				label="Password"
				name="password"
				rules={[rules.required('Please input your password!')]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item<FieldType>
				name="remember"
				valuePropName="checked"
				wrapperCol={{ offset: 8, span: 16 }}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}

export default LoginForm;
