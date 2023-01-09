import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'contactForm',
	title: 'Contact Form',
	type: 'object',
	fields: [
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: "email",
		}),
		defineField({
			name: 'subject',
			title: 'Subject',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: "subject",
		}),
		defineField({
			name: 'message',
			title: 'Message',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: "message",
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Contact Form'
			}
		},
	}

})
