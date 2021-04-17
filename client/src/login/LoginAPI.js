/*
* User Login
*/
export async function login(loginDetails) {
    const response = await fetch(`/session`, {
            method: 'post',
            body: JSON.stringify(loginDetails),
            headers: {'Content-Type': 'application/json'},
        }
    );
    return await response.json();
}
