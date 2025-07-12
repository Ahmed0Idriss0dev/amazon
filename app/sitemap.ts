import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';


export default function sitemap(): MetadataRoute.Sitemap {
  return blogPosts.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? new Date(),
  }));
}
