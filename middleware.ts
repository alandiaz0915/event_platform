import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)|api/webhook/clerk|api/webhook/stripe|api/uploadthing).*)',
    // Always run for other API routes
    '/(api|trpc)(.*)',
  ],
};
