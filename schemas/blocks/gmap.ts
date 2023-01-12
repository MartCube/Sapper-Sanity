import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'gmap',
	title: 'Google Map',
	type: 'object',
	fields: [
		defineField({
			name: 'location',
			title: 'Map Location',
			type: 'string',
			validation: Rule => Rule.required()
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Google Map'
			}
		},
	}

})
