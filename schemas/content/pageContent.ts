import { defineArrayMember, defineType } from 'sanity'

export default defineType({
	name: 'pageContent',
	title: 'Page Content',
	type: 'array',
	of: [
		defineArrayMember({
			type: 'projectList',
		}),
		defineArrayMember({
			type: 'contactForm',
		}),
		defineArrayMember({
			type: 'blog',
		}),
		defineArrayMember({
			type: 'about',
		}),
	],
})
