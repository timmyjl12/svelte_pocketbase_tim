import { redirect } from '@sveltejs/kit'
import * as cookie from 'cookie';
// import PocketBase from 'pocketbase'
// import { client } from '$lib/helpers/helpers.js'
// const client = new PocketBase('http://127.0.0.1:8090')

/** @type {import('./$types').PageServerLoad} */
export const load = ({ locals }) => {
	if (locals.pocketbase.authStore.isValid) {
		throw redirect(303, '/');
	}
};

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ request, locals }) => {
        // locals.pocketbase = client
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			await locals.pocketbase.users.authViaEmail(data.email, data.password)
		} catch (err) {
			console.log('Error:', err)
			return {
				error: true,
				email: data.email
			};
		}
		throw redirect(303, '/')
	},
	gAuth: async ({ locals, cookies }) => {
		const result = await locals.pocketbase.Users.listAuthMethods()
		// console.log("result", result)
		const liststate = result.authProviders
		const redirecturl = "http://localhost:5173/redirect"
		locals.redirecturl = redirecturl
		locals.name = "google"
		locals.codeChallenge = liststate[0].codeChallenge
		locals.codeVerifier = liststate[0].codeVerifier
		// cookies.set('localsName', result.authProviders[0].name, {
		// 	path: '/',
		// 	httpOnly: false,
		// 	sameSite: 'strict',
		// 	secure: false,
		// 	maxAge: 60 * 60 * 24 * 30,
		//   })
		throw redirect(303, liststate[0].authUrl + redirecturl)
		// return {liststate: liststate, redirecturl: redirecturl}
		// return {url: liststate[0].authUrl + redirecturl}
		// window.location.href =liststate[0].authUrl + redirecturl
	}

};


