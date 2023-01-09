import { defineField, defineArrayMember, defineType } from 'sanity'

export default defineType({
	name: 'gallery',
	title: 'Gallery',
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
				title: 'Image Gallery'
			}
		},
	}

})
