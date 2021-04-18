/*
* Spin
*/
import { authHeader } from '../_helpers/AuthHeader';

export async function slot() {
    const response = await fetch(`/spins`, {
        method: 'GET',
        headers: authHeader()
    });
    return await response.json();
}
