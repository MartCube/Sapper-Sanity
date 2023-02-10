import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
	name: 'youtubeSlider',
	title: 'Youtube Slider',
	type: 'object',
	fields: [
		defineField({
			name: 'list',
			title: 'List',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'youtube',
				}),
			],

		})
	],
	preview: {
		prepare() {
			return {
				title: 'Slider of Youtube videos'
			}
		},
	}

})
