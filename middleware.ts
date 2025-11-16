import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher([
 
    '/',
    '/about',
    '/sign-in',
    '/sign-up',
    '/verify-email',
    '/reset-password',
    '/home',
 
])

 
const isPublicApiRoute = createRouteMatcher([
    '/api/videos'
])

export default clerkMiddleware(async(auth, req)=>{
    const { userId } = await auth();
    const currentUrl = new URL(req.url)
    const  isAccessingDashboard = currentUrl.pathname === '/home'
    const isApiRequest = currentUrl.pathname.startsWith('/api')

    if (userId && isPublicRoute(req) && !isAccessingDashboard){
        return NextResponse.redirect(new URL('/home', req.url))
    }

    //Not loggen in redirect to signin
    if(!userId ){
        if(!isPublicRoute(req) && !isPublicApiRoute(req)){
            return NextResponse.redirect(new URL('/sign-in', req.url))
        }
        // if req is protected routes & user is not logged in redirect to signin
        if(isApiRequest && !isPublicApiRoute(req)){
            return NextResponse.redirect(new URL('/sign-in', req.url))
        }
    }
    return NextResponse.next();
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)","/", "/(api|trpc)(.*)"],
};