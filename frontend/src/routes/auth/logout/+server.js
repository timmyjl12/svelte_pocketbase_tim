import { redirect } from '@sveltejs/kit';
// import PocketBase from 'pocketbase'
import * as cookie from 'cookie';
// const client = new PocketBase('http://127.0.0.1:8090')
const defaultCookieOptions = { maxAge: -1, path: '/', httpOnly: true, sameSite: true, secure: true };

export const POST = async ({ locals, cookies }) => {
    // console.log(locals)
    // locals.pocketbase = client
    locals.pocketbase.authStore.clear()
	locals.user = undefined
    // const response = new Response('{}');
    // response.headers.append('Set-Cookie', cookie.serialize('codeVerifier', '', defaultCookieOptions));
    // return response
    // cookies.set('codeVerifier', '', {
    //     // send cookie for every page
    //     path: '/',
    //     // server side only cookie so you can't use `document.cookie`
    //     httpOnly: false,
    //     // only requests from same site can send cookies
    //     // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
    //     sameSite: 'strict',
    //     // only sent over HTTPS in production
    //     secure: false,
    //     // set cookie to expire after a month
    //     maxAge: 1,
    //   })

	throw redirect(303, '/')
};
