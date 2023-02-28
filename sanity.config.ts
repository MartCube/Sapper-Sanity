import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { media, mediaAssetSource } from 'sanity-plugin-media'
import { structure } from './deskStructure'
import { ReferenceBehavior, withDocumentI18nPlugin } from '@sanity/document-internationalization'



export default defineConfig({
	name: 'default',
	title: 'Sapper',

	projectId: 'ede4uk6z',
	dataset: 'production',

	plugins: withDocumentI18nPlugin(() => ([
		deskTool({ structure: structure }),
		media(),
		visionTool(),
	]), {
		includeDeskTool: false,
		languages: [
			{ "id": "ua", "title": "Ukrainian" },
			{ "id": "en", "title": "English" },
		],
		referenceBehavior: ReferenceBehavior.WEAK
	}),

	form: {
		image: {
			assetSources: () => [mediaAssetSource],
			directUploads: true,
		}
	},

	schema: {
		types: schemaTypes
	},

})
