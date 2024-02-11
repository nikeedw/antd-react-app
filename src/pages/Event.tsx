import { FC, useEffect, useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import { Row, Layout, Button, Modal } from 'antd'
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Event: FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { fetchGuests } = useActions()
	const { guests } = useTypedSelector(state => state.event);

	useEffect(() => {
		fetchGuests();
	}, [])

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
				<EventForm 
					guests={guests}
				/>
      </Modal>
		</Layout>
	)
}

export default Event
