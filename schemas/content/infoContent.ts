import { defineArrayMember, defineType } from 'sanity'

export default defineType({
	name: 'infoContent',
	title: 'info Content',
	type: 'array',
	of: [
		defineArrayMember({
			type: 'pageIntro',
		}),
		defineArrayMember({
			title: 'Richtext',
			type: 'richtext',
		}),
		defineArrayMember({
			title: 'Richtext Image',
			type: 'richtextImage',
		}),
		// You can add additional types here. Note that you can't use
		// primitive types such as 'string' and 'number' in the same array
		// as a block type.
		defineArrayMember({
			type: 'image',
			name: 'image',
			title: "Single Image"
		}),
		// defineArrayMember({
		// 	type: 'gallery',
		// }),
		// defineArrayMember({
		// 	type: 'youtube',
		// }),
	],
})
