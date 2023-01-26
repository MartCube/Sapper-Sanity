import { defineArrayMember, defineType } from 'sanity'


export default defineType({
	name: 'pageContent',
	title: 'Page Content',
	type: 'array',
	of: [
		defineArrayMember({
			type: 'pageIntro',
		}),
		defineArrayMember({
			type: 'slider',
		}),
		defineArrayMember({
			type: 'homeInfo',
		}),
		defineArrayMember({
			type: 'articleSlider',
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
			type: 'gmap',
		}),
		defineArrayMember({
			type: 'contactForm',
		}),
		defineArrayMember({
			type: 'contactInfo',
		}),
		defineArrayMember({
			type: 'blog',
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
