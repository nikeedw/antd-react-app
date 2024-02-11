import { FC, useEffect, useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import { Row, Layout, Button, Modal } from 'antd'
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const Event: FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { fetchGuests, createEvent, fetchEvents } = useActions()
	const { guests, events } = useTypedSelector(state => state.event);
	const { user } = useTypedSelector(state => state.auth)

	useEffect(() => {
		fetchGuests();
		fetchEvents(user.username);
	}, [])

	const addNewEvent = (event: IEvent) => {
		setIsModalOpen(false);
		createEvent(event);
	}

	return (
		<Layout>
			{JSON.stringify(events)}
			<EventCalendar events={events} />
			<Row justify="center">
				<Button
					type="primary"
					onClick={() => setIsModalOpen(true)}
				>
					Add event
				</Button>
			</Row>
			<Modal
				title="Add event"
				visible={isModalOpen}
				onCancel={() => setIsModalOpen(false)}
				footer={null}
			>
				<EventForm
					guests={guests}
					submit={addNewEvent}
				/>
			</Modal>
		</Layout>
	)
}

export default Event
