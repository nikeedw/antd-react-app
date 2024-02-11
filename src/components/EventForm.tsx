import { FC, useState } from 'react'
import { Form, Input, Space, DatePicker, Button, Select } from 'antd';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/date';

interface EventFormProps {
	guests: IUser[];
}

const EventForm: FC<EventFormProps> = (props) => {
	const [event, setEvent] = useState<IEvent>({
		author: '',
		date: '',
		description: '',
		guest: ''
	} as IEvent);

	const selectDate = (date: Moment | null) => {
		if (date) {
			setEvent({...event, date: formatDate(date?.toDate())});
		}
	}

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			autoComplete="off"
		>
			<Form.Item
				label="Event description"
				name="description"
				rules={[rules.required()]}
			>
				<Input 
					value={event.description}
					onChange={e => setEvent({...event, description: e.target.value})}
				/>
			</Form.Item>
			<Form.Item
				label="Event date"
				name="date"
				rules={[rules.required()]}
			>
				<Space direction="vertical">
					<DatePicker 
						onChange={date => selectDate(date)}
					/>
				</Space>
			</Form.Item>
			<Form.Item 
				label="Choose guest"
				name="guest"
				rules={[rules.required()]}
			>
				<Select
					onChange={(guest: string) => setEvent({...event, guest})}
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
				<Button type="ghost" htmlType="submit" >
					Create
				</Button>
			</Form.Item>
		</Form>
	)
}

export default EventForm
