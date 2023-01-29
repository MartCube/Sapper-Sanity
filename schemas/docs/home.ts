import { defineArrayMember, defineField, defineType, SlugInput } from 'sanity'
import { RiPagesLine } from 'react-icons/ri'

export default defineType({
	name: 'home',
	title: 'Home',
	type: 'document',
	icon: RiPagesLine,
	i18n: true,
	groups: [
		{
			name: 'home',
			title: 'Home',
			default: true,
		},
		{
			name: 'metaTags',
			title: 'Meta Tags',
		},
		{
			name: 'sitemap',
			title: 'Sitemap',
		}
	],
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			group: 'home',
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'homeContent',
			group: 'home',
		}),
		defineField({
			name: 'metaTags',
			type: 'metatags',
			group: 'metaTags',
		}),
		defineField({
			name: 'sitemap',
			title: "Sitemap",
			type: 'sitemap',
			group: 'sitemap',
		})
	],
	preview: {
		select: {
			title: 'title',
			subtitle: '__i18n_lang'
		},
		prepare(selection) {
			const { title, subtitle } = selection
			return {
				title: `${title}`,
				subtitle: `${subtitle}`
			}
		},
	}
})
