import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'contactInfo',
	title: 'Contact Info',
	type: 'object',
	fields: [
		defineField({
			name: 'phone',
			title: 'Phone Number',
			type: 'string',
		}),
		defineField({
			name: 'email',
			title: 'Email Adress',
			type: 'string',
		}),
		defineField({
			name: 'adress',
			title: 'Street Adress',
			type: 'string',
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Contact Info'
			}
		},
	}

})
