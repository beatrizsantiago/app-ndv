export async function Login(email, password) {
    try {
        console.warn(email, password);
        return true

    } catch (error) {
        console.warn("Error Login", error);
        throw error
    }
}

export default { Login }