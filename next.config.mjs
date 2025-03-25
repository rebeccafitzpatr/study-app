import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  output: 'standalone', // Enable standalone output for Fly.io deployment


}

export default withPayload(nextConfig, { devBundleServerPackages: false })
