import { FC } from 'react'
import { Layout, Row, Card } from 'antd'
import LoginForm from '../components/LoginForm'

const Login: FC = () => {
	return (
		<Layout>
			<Row justify="center" align="middle" className="h100">
				<Card style={{borderRadius: "15px"}}>
					<LoginForm />
				</Card>
			</Row>
		</Layout>
	)
}

export default Login
