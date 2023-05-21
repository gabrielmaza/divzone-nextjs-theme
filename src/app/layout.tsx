import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DivZone - Multipurpose themes',
  description: 'Experience revolutionary web templates with the latest design standards, cutting-edge technology, and unmatched performance.',
  keywords: 'multipurpose themes, web templates, design standards, cutting-edge technology, performance',
  author: 'DivZone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
      </Head>
      <body className={`bg-gray-950 ${inter.className}`} style={{ scrollBehavior: 'smooth' }}>{children}</body>
    </html>
  )
}
