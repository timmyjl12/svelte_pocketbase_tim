import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({locals, url}) => {
	if (locals.pocketbase.authStore.isValid) {
		throw redirect(303, '/')
	}
  const returnCode = url.searchParams.get('code')
  if (!returnCode) {
    throw redirect(303, '/auth/login');
  }
    const userInfo = await locals.pocketbase.users.authViaOAuth2(
      locals.gAuthName,
      returnCode,
      locals.codeVerifier,
      locals.redirectURL
  )
      // console.log(userInfo)
      // throw redirect(303, '/') // This breaks oauth for some reason?
  // return {returnCode: returnCode, name: locals.gAuthName, codeVerifier: locals.codeVerifier, redirectURL: locals.redirectURL}
  return {}
  }

export const actions = {
	gAuthRedirect: async () => {
    // const formData = await request.formData()
		// const data = Object.fromEntries([...formData])
		throw redirect(303, "/")
	}

};


