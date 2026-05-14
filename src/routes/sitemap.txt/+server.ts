import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = async () => {
	return new Response(
		`https://do-you-gcal.netlify.app/
https://do-you-gcal.netlify.app/support
https://do-you-gcal.netlify.app/privacy`, {
			status: 200,
			headers: {
				'content-type': 'text/plain; charset=utf-8'
			}
		}
	);
};
