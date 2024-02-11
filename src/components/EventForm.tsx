import { FC, useState } from 'react'
import { Form, Input, Space, DatePicker, Button, Select } from 'antd';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';

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
				<Input />
			</Form.Item>
			<Form.Item
				label="Event date"
				name="date"
				rules={[rules.required()]}
			>
				<Space direction="vertical">
					<DatePicker />
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
