import { Layout, Row, Menu } from 'antd'
import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Navbar: FC = () => {
	const router = useHistory();
	const { isAuth } = useTypedSelector(state => state.auth)

	return (
		<Layout.Header>
			<Row justify="end">
				{
					isAuth
						?
						<>
							<div style={{ color: "white" }}>Edward</div>
							<Menu theme="dark" mode="horizontal" selectable={false}>
								<Menu.Item
									onClick={() => console.log("Exit")}
									key={1}
								>
									Exit
								</Menu.Item>
							</Menu>
						</>
						:
						<Menu theme="dark" mode="horizontal" selectable={false}>
							<Menu.Item
								onClick={() => router.push(RouteNames.LOGIN)}
								key={2}
							>
								Login
							</Menu.Item>
						</Menu>
				}
			</Row>
		</Layout.Header>
	)
}

export default Navbar
