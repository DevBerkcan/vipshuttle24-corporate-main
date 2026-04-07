import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { getHomeMetadata } from '@/i18n/seo';

export const metadata: Metadata = getHomeMetadata('en');

export default function EnglishHomePage() {
  return <HomePage />;
}
