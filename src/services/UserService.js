export async function Login(email, password) {
    try {
        console.warn(email, password);
        return true

    } catch (error) {
        console.warn("Error Login", error);
        throw error
    }
}

export async function Register(fullname, phone, email, password, confirmPassword) {
    try {
        console.warn(fullname, phone, email, password, confirmPassword);
        return true

    } catch (error) {
        console.warn("Error Register", error);
        throw error
    }
}

export async function Logout() {
    try {
        
        return true

    } catch (error) {
        console.warn("Error Logout", error);
        throw error
    }
}

export default { Login, Register, Logout }