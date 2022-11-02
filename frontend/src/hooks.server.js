import PocketBase from 'pocketbase';
import * as cookie from 'cookie';

export const handle = async ({ event, resolve }) => {
	event.locals.pocketbase = new PocketBase('http://127.0.0.1:8090')
	event.locals.pocketbase.authStore.loadFromCookie(event.request.headers.get('cookie') ?? '')
	const gAuthName = event.cookies.get('gAuthName')

	if (gAuthName) {
		event.locals.gAuthName = event.cookies.get('gAuthName')
		event.locals.redirectURL = event.cookies.get('redirectURL')
		event.locals.codeVerifier = event.cookies.get('codeVerifier')
	}
	if (event.locals.pocketbase.authStore.isValid) {
		event.locals.user = event.locals.pocketbase.authStore.model
		event.locals.codeVerifier = ''
	}

	const response = await resolve(event)

	if (event.locals.googleAuth) {
		console.log("event.locals.googleAuth2", event.locals.googleAuth)
		await event.locals.pocketbase.authStore.save(event.locals.token, event.locals.gUser)
		event.locals.user = event.locals.pocketbase.authStore.model
		console.log(event.locals.user = event.locals.pocketbase.authStore.model)
	}
	const defaultCookieOptions = { maxAge: 1000 * 24 * 60 * 60, path: '/', httpOnly: false, sameSite: true, secure: false };
	response.headers.set('set-cookie', event.locals.pocketbase.authStore.exportToCookie(defaultCookieOptions))
	if (event.locals.name != '' && String(event.locals.name) != 'undefined' && event.locals.name != undefined) {
		response.headers.append('set-cookie',cookie.serialize('gAuthName', event.locals.name,
			{
                path: '/',
                httpOnly: true
            })
        )
		response.headers.append('set-cookie',cookie.serialize('redirectURL', event.locals.redirecturl,
			{
                path: '/',
                httpOnly: true
            })
		)
		// if (!event.locals.pocketbase.authStore.isValid) {
			response.headers.append('set-cookie',cookie.serialize('codeVerifier', event.locals.codeVerifier,
				{
					path: '/',
					httpOnly: true
				})
			)
		// }
	}
	return response
}