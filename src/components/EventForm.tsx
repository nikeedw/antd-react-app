import { FC } from 'react'
import { Form, Input, Space, DatePicker, Button, Select } from 'antd';
import { rules } from '../utils/rules';

type FieldType = {
	description?: string;
	date?: Date;
}

const EventForm: FC = () => {

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			autoComplete="off"
		>
			<Form.Item<FieldType>
				label="Event description"
				name="description"
				rules={[rules.required()]}
			>
				<Input />
			</Form.Item>
			<Form.Item<FieldType>
				label="Event date"
				name={"date"}
				rules={[rules.required()]}
			>
				<Space direction="vertical">
					<DatePicker />
				</Space>
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="ghost" htmlType="submit" >
					Create
				</Button>
				<Select
					defaultValue="lucy"
					style={{ width: 120, marginLeft: 15 }}
					options={[
						{ value: 'jack', label: 'Jack' },
						{ value: 'lucy', label: 'Lucy' },
						{ value: 'Yiminghe', label: 'yiminghe' },
						{ value: 'disabled', label: 'Disabled', disabled: true },
					]}
				/>
			</Form.Item>
		</Form>
	)
}

export default EventForm
