import { FC, useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import { Row, Layout, Button, Modal } from 'antd'

const Event: FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

	return (
		<Layout>
			<EventCalendar events={[]} />
			<Row justify="center">
				<Button
					type="primary" 
					onClick={showModal}
				>
					Add event
				</Button>
			</Row>
			<Modal 
				title="Add event" 
				visible={isModalOpen} 
				onCancel={handleCancel}
				footer={null}
			>
      </Modal>
		</Layout>
	)
}

export default Event
