import { defineField, defineArrayMember, defineType } from 'sanity'

export default defineType({
	name: 'homeSlider',
	title: 'Home Slider',
	type: 'object',
	fields: [
		defineField({
			name: 'list',
			title: 'List',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'slide',
				}),
			],

		})
	],
	preview: {
		prepare() {
			return {
				title: 'Home Slider'
			}
		},
	}

})
