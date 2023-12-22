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
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Descripion',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
		}),
		defineField({
			name: 'imageMobile',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
		}),
	],
	preview: {
		select: {
			title: 'title',
			image: 'image.asset'
		},
		prepare(selection) {
			const { title, image } = selection
			return {
				title: `${title}`,
				media: image
			}
		},
	}
})
