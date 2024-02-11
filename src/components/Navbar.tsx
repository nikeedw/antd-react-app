import { Layout, Row, Menu } from 'antd'
import { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const Navbar: FC = () => {
	const { isAuth, user } = useTypedSelector(state => state.auth)
	const { logout } = useActions();

	return (
		<Layout.Header>
			<Row justify="end">
				{
					isAuth &&
						<>
							<div style={{ color: "white", marginRight: 15}}>{user.username}</div>
							<Menu theme="dark" mode="horizontal" selectable={false}>
								<Menu.Item
									onClick={() => logout()}
									key={1}
								>
									Exit
								</Menu.Item>
							</Menu>
						</>
				}
			</Row>
		</Layout.Header>
	)
}

export default Navbar
