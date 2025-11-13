import client from '#lib/client.js';
import type { Post } from './post-collection.model';

export const getAllPosts = async () =>
    await client.getContentList<Post>({
        contentType: 'Post',
        sort: { "fields.date": "desc" },
        pagination: {take: 6},
    });