import type { RequestHandler } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */
export const GET: RequestHandler = async ({ params, fetch, request, url, locals, setHeaders }) => {

    return new Response(
        `https://do-you-gcal.netlify.app/
https://do-you-gcal.netlify.app/support
https://do-you-gcal.netlify.app/privacy`, {
        status: 200
    });
};
