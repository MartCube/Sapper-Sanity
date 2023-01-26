import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'contactInfo',
	title: 'Contact Info',
	type: 'object',
	fields: [
		defineField({
			name: 'phone',
			type: 'object',
			fields: [
				defineField({
					name: 'value',
					title: 'Value',
					type: 'string',
				}),
				defineField({
					name: 'title',
					title: 'Title',
					type: 'string',
				}),
				defineField({
					name: 'icon',
					title: 'Icon',
					type: 'string',
				}),
			]
		}),
		defineField({
			name: 'email',
			type: 'object',
			fields: [
				defineField({
					name: 'value',
					title: 'Value',
					type: 'string',
				}),
				defineField({
					name: 'title',
					title: 'Title',
					type: 'string',
				}),
				defineField({
					name: 'icon',
					title: 'Icon',
					type: 'string',
				}),
			]
		}),
		defineField({
			name: 'address',
			type: 'object',
			fields: [
				defineField({
					name: 'value',
					title: 'Value',
					type: 'string',
				}),
				defineField({
					name: 'title',
					title: 'Title',
					type: 'string',
				}),
				defineField({
					name: 'icon',
					title: 'Icon',
					type: 'string',
				}),
			]
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
