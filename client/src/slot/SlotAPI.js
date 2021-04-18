/*
* Spin
*/
import { authHeader } from '../_helpers/authHeader';

export async function slot() {
    const response = await fetch(`/spins`, {
        method: 'GET',
        headers: authHeader()
    });
    return await response.json();
}
