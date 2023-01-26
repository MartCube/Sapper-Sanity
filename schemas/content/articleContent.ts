import { defineArrayMember, defineType } from 'sanity'

export default defineType({
	name: 'articleContent',
	title: 'Article Content',
	type: 'array',
	of: [
		defineArrayMember({
			type: 'pageIntro',
		}),
		defineArrayMember({
			title: 'Richtext',
			type: 'richtext',
		}),
		// You can add additional types here. Note that you can't use
		// primitive types such as 'string' and 'number' in the same array
		// as a block type.
		defineArrayMember({
			type: 'image',
			options: { hotspot: true },
		}),
		// defineArrayMember({
		// 	type: 'gallery',
		// }),
		// defineArrayMember({
		// 	type: 'youtube',
		// }),
	],
})
