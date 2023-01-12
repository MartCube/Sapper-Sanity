import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'slide',
	title: 'Slide',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
		})
	],
	preview: {
		select: {
			image: 'image.asset'
		},
		prepare(selection) {
			const { image } = selection
			return {
				title: 'Slide',
				media: image
			}
		},
	}
})
