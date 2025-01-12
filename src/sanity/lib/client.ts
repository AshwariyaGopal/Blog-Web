import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:'2q9qm9xw',
  dataset:'production',
  apiVersion:'2025-01-03',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
