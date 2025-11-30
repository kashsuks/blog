import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			slug: z.string().optional(),
			category: z.string().optional() // Add category field
		}),
});

export const collections = { blog };