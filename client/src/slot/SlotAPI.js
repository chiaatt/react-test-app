/*
* Spin
*/
import { AuthHeader } from '../_helpers/AuthHeader';

export async function slot() {
    const response = await fetch(`/spins`, {
        method: 'GET',
        headers: AuthHeader()
    });
    return await response.json();
}
