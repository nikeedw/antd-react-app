export const rules = {
	required: (message: string = 'Required field') => ({
		required: true,
		message
	})
}