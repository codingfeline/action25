export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/Enquiries']
}

// *: zero or more
// +: one or more
// ?: zero or one