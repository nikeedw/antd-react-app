import { Button, Checkbox, Form, Input } from 'antd';
import { FC } from 'react'
import { rules } from '../utils/rules';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useTypedSelector } from '../hooks/useTypedSelector';

type FieldType = {
	username?: string;
	password?: string;
	remember?: string;
};

const LoginForm: FC = () => {
	const dispatch = useDispatch();
	const {error, isLoading} = useTypedSelector(state => state.auth)

	const onFinish = () => {
		dispatch(AuthActionCreators.login('user', '123'));
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
				<Button type="primary" htmlType="submit" loading={isLoading}>
					Login
				</Button>
			</Form.Item>
		</Form>
	)
}

export default LoginForm;
