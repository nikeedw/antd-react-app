import { Button, Checkbox, Form, Input } from 'antd';
import { FC, useState } from 'react'
import { rules } from '../utils/rules';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

type FieldType = {
	username?: string;
	password?: string;
	remember?: string;
};

const LoginForm: FC = () => {
	const {error, isLoading} = useTypedSelector(state => state.auth)
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const { login } = useActions();

	const onFinish = () => {
		login(username, password);
	};
	
	const onFinishFailed = () => {
		console.log('Failed:');
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			autoComplete="off"
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			{error &&
				<div style={{color: 'red'}}>
					{error}
				</div>
			}
			<Form.Item<FieldType>
				label="Username"
				name="username"
				rules={[rules.required('Please input your username!')]}
			>
				<Input 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
			</Form.Item>

			<Form.Item<FieldType>
				label="Password"
				name="password"
				rules={[rules.required('Please input your password!')]}
			>
				<Input.Password 
					value={password} 
					onChange={(e) => setPassword(e.target.value)} 
				/>
			</Form.Item>

			<Form.Item<FieldType>
				name="remember"
				valuePropName="checked"
				wrapperCol={{ offset: 8, span: 16 }}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit" loading={isLoading}>
					Login
				</Button>
			</Form.Item>
		</Form>
	)
}

export default LoginForm;
