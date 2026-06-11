import { redirect } from 'next/navigation'

// Redirect /ru/blog to main /blog page (single blog index)
export default function RuBlogIndex() {
  redirect('/blog')
}
