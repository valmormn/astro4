import { z, defineCollection } from 'astro:content'

const productsCollection = defineCollection({
  schema: z.object({
    price: z.number().optional(),
    isDraft: z.boolean().optional(),
    title: z.string().optional(),
    path: z.string().optional(),
    description: z.string().optional(),

    sizes: z.array(z.string()).optional(),
    colors: z.array(z.string()).optional(),

    // sortOrder: z.number(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    author: z.string().default('Anonymous').optional(),
    // language: z.enum(['en', 'es']),
    tags: z.array(z.string()).optional(),
    // An optional frontmatter property. Very common!
    // footnote: z.string().optional(),
    // In frontmatter, dates written without quotes around them are interpreted as Date objects
    publishDate: z.date().optional(),
    // You can also transform a date string (e.g. "2022-07-08") to a Date object
    // publishDate: z.string().transform((str) => new Date(str)),
    // Advanced: Validate that the string is also an email
    authorContact: z.string().email().optional(),
    // Advanced: Validate that the string is also a URL
    canonicalURL: z.string().url().optional(),
  })
})

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
		description: z.string().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
  }),
})

export const collections = {
  posts: postsCollection,
  shop: productsCollection,
}
