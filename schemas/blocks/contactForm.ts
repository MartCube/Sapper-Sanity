import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'contactForm',
	title: 'Contact Form',
	type: 'object',
	fields: [
		defineField({
			name: 'name',
			title: 'Full Name',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: "Full Name",
		}),
		defineField({
			name: 'email',
			title: 'Email Adress',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: "Email Adress",
		}),
		defineField({
			name: 'phone',
			title: 'Phone Number',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: "Phone Number",
		}),
		defineField({
			name: 'message',
			title: 'Your Message',
			type: 'string',
			validation: Rule => Rule.required(),
			initialValue: "Your Message",
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
