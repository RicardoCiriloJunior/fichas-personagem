const TOKEN_KEY = 'token';
const USER_KEY = 'user';

export function setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token)
}
export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}
export function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}
export function setUser(user: unknown) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
}
export function getUser() {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
}
export function removeUser() {
    localStorage.removeItem(USER_KEY);
}
export function isAuthenticated() {
    return !!getToken();
}
