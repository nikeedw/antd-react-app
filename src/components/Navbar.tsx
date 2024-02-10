import { Layout, Row, Menu } from 'antd'
import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';

const Navbar: FC = () => {
	const router = useHistory();
	const { isAuth, user } = useTypedSelector(state => state.auth)
	const dispatch = useDispatch();

	return (
		<Layout.Header>
			<Row justify="end">
				{
					isAuth
						?
						<>
							<div style={{ color: "white", marginRight: 15}}>{user.username}</div>
							<Menu theme="dark" mode="horizontal" selectable={false}>
								<Menu.Item
									onClick={() => dispatch(AuthActionCreators.logout())}
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
