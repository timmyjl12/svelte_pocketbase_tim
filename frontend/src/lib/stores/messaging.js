import { writable, readable } from 'svelte/store';

export const defaultMessage = readable(
    {
      message: '',
      error: '',
      class: 'alert-info',
  }
)
export const message = writable(
	  {
		message: '',
		error: '',
        class: 'alert-info',
	}
)
