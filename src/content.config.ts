import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Startup-specific fields
			startupNumber: z.number().optional(), // Lần thứ mấy (1-100)
			startupName: z.string().optional(), // Tên startup
			status: z.enum(['building', 'launched', 'failed', 'alive']).optional(),
			buildTime: z.string().optional(), // e.g. "2 tuần"
			revenue: z.string().optional(), // e.g. "$0", "$50 MRR"
			techStack: z.array(z.string()).optional(),
			lesson: z.string().optional(), // Bài học chính 1 dòng
			type: z.enum(['build-log', 'post-mortem', 'lesson', 'general']).default('general'),
		}),
});

export const collections = { blog };
