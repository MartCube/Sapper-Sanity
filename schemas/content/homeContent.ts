import { defineArrayMember, defineType } from 'sanity'


export default defineType({
	name: 'homeContent',
	title: 'Home Content',
	type: 'array',
	of: [
		defineArrayMember({
			type: 'homeSlider',
		}),
		defineArrayMember({
			type: 'slider',
		}),
		defineArrayMember({
			type: 'latestArticles',
		}),
		defineArrayMember({
			type: 'counter',
		}),
		defineArrayMember({
			type: 'achivments',
		}),
		defineArrayMember({
			type: 'partners',
		}),
		defineArrayMember({
			type: 'testimonials',
		}),
		defineArrayMember({
			type: 'services',
		}),
		defineArrayMember({
			title: 'Richtext',
			type: 'richtext',
		}),
		defineArrayMember({
			title: 'Richtext Image',
			type: 'richtextImage',
		}),
	],
})
