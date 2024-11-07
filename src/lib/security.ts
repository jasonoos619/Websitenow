import DOMPurify from 'dompurify';
import { z } from 'zod';

// Input validation schemas
export const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

export const propertySearchSchema = z.object({
  location: z.string().min(2).max(100),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  bedrooms: z.number().optional(),
});

// Sanitize HTML content
export const sanitizeHtml = (dirty: string) => DOMPurify.sanitize(dirty);

// Rate limiting
const rateLimits = new Map<string, { count: number; timestamp: number }>();

export const checkRateLimit = (identifier: string, limit: number, windowMs: number): boolean => {
  const now = Date.now();
  const userLimit = rateLimits.get(identifier);

  if (!userLimit) {
    rateLimits.set(identifier, { count: 1, timestamp: now });
    return true;
  }

  if (now - userLimit.timestamp > windowMs) {
    rateLimits.set(identifier, { count: 1, timestamp: now });
    return true;
  }

  if (userLimit.count >= limit) {
    return false;
  }

  userLimit.count += 1;
  rateLimits.set(identifier, userLimit);
  return true;
};

// Security headers
export const securityHeaders = {
  'Content-Security-Policy': 
    "default-src 'self'; " +
    "img-src 'self' https://images.unsplash.com; " +
    "style-src 'self' 'unsafe-inline'; " +
    "script-src 'self' 'unsafe-inline'; " +
    "connect-src 'self';",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};