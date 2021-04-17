/*
* Registers a user
*/
export async function register(userData) {
    const response = await fetch(`/users`, {
            method: 'post',
            body: JSON.stringify(userData),
            headers: {'Content-Type': 'application/json'},
        }
    );
    return await response.json();
}
