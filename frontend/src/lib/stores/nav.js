import { readable, writable } from 'svelte/store';
import { goto } from '$app/navigation';
import { browser } from "$app/environment"

export const navItems = readable(
    [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
    ]
)
// export const navItemsAuth = readable(
//     [
//         user.logged_in ? { label: "Login", href: "/auth/login" }:{ label: "Logout", href: "/" },
//     ]
// )
export const base_url = writable()
export function routeToPage(route, replaceState) {
	goto(route, { replaceState })
}
export function get_base_url() {
    if (browser){
        return "http://localhost:5173"
    }
}

