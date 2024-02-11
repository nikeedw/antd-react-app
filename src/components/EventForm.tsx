import { FC, useState } from 'react'
import { Form, Input, DatePicker, Button, Select } from 'antd';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/date';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface EventFormProps {
	guests: IUser[];
	submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = (props) => {
	const [event, setEvent] = useState<IEvent>({
		author: '',
		date: '',
		description: '',
		guest: ''
	} as IEvent);
	const { user } = useTypedSelector(state => state.auth)

	const selectDate = (date: Moment | null) => {
		if (date) {
			setEvent({ ...event, date: formatDate(date.toDate()) })
		}
	}

	const submitForm = () => {
		props.submit({ ...event, author: user.username })
	}

	return (
		<Form
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			autoComplete="off"
			onFinish={submitForm}
		>
			<Form.Item
				label="Event description"
				name="description"
				rules={[rules.required()]}
			>
				<Input
					onChange={e => setEvent({ ...event, description: e.target.value })}
					value={event.description}
				/>
			</Form.Item>
			<Form.Item
				label="Event date"
				name="date"
				rules={[rules.required()]}
			>
				<DatePicker
					onChange={date => selectDate(date)}
				/>
			</Form.Item>
			<Form.Item
				label="Choose guest"
				name="guest"
				rules={[rules.required()]}
			>
				<Select
					onChange={(guest: string) => setEvent({ ...event, guest })}
					style={{ width: 120 }}
				>
					{props.guests.map(guest =>
						<Select.Option key={guest.username} value={guest.username}>
							{guest.username}
						</Select.Option>
					)}
				</Select>
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit" >
					Create
				</Button>
			</Form.Item>
		</Form>
	)
}

export default EventForm
