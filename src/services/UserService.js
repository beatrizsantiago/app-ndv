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

export async function InfoProfile() {
    try {
        let datas = {
            name: 'Ana Beatriz Santiago',
            email: 'beatrizsantiago1999@gmail.com',
            phone: '(85) 12365-4569',
            detailsUser: false,
            userType: 'Integrador',
            mentor: 'Fulano da Silva',
            net: 3
        }

        return datas

    } catch (error) {
        console.warn("Error InfoProfile", error);
        throw error
    }
}

export default { Login, Register, Logout, InfoProfile }