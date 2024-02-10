import { Layout, Row, Menu } from 'antd'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { RouteNames } from '../router';

const Navbar: FC = () => {
	const router = useHistory();
	const auth = false;

	return (
		<Layout.Header>
			<Row justify="end">
				{auth
					?
					<>
						<div style={{color: "white"}}>Edward</div>
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
