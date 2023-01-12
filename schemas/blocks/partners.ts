import { defineField, defineArrayMember, defineType } from 'sanity'

export default defineType({
	name: 'partners',
	title: 'Partners',
	type: 'object',
	fields: [
		defineField({
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'image',
					options: { hotspot: true },
				}),
			]
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Partners'
			}
		},
	}

})
