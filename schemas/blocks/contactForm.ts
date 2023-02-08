import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'contactForm',
	title: 'Contact Form',
	type: 'object',
	fields:[
				defineField({
          name: 'name',
          title: 'Name',
          type: 'inputField',
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'inputField',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'inputField',
        }),
        defineField({
          name: 'message',
          title: 'Message',
          type: 'inputField',
        }),
			],
	preview: {
		prepare() {
			return {
				title: 'Contact Form'
			}
		},
	}

})
