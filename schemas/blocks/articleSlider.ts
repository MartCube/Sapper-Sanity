import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'articleSlider',
	title: 'Article Slider',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		})
	],
	preview: {
		prepare() {
			return {
				title: 'Article Slider',
			}
		},
	}

})
