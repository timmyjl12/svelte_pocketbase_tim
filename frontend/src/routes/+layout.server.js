import { serializeNonPOJOs } from '$lib/helpers/helpers.js';

/** @type {import('./$types').LayoutServerLoad} */
export const load = ({ locals }) => {
	// console.log("locals.user layout", locals.user)
	if (locals.user && locals.user.profile) {
		return {
			profile: serializeNonPOJOs(locals.user.profile),
			email: serializeNonPOJOs(locals.user.email),
			is_logged_in: serializeNonPOJOs(locals.pocketbase.authStore.isValid)
		};
	}
};
