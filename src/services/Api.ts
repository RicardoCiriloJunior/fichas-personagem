const BASE_URL = 'http://localhost:8000/api'
import type { Opcoes } from '../Util/Opcoes';

async function fetchApiData(endpoint: string, options: Opcoes) {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
        method: options.method ?? 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(options.authorization ? { Authorization: options.authorization } : {}),
        },
        ...(options.body ? { body: JSON.stringify(options.body) } : {}),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message ?? 'Erro ao buscar dados');
    }
    return data;
}

export async function login(email: string, password: string) {
    return await fetchApiData('login', {
        method: 'POST',
        body: { 
            email,
            password
         }
    });
}
export async function cadastrar(name: string, email: string, password: string, password_confirmation: string) {
    return await fetchApiData('register', {
        method: 'POST',
        body: { 
            name,
            email,
            password,
            password_confirmation
         }
    });
} 
export async function atualizarFicha(ficha: unknown, user_id: number, token: string) {
    return await fetchApiData('update-ficha', {
        method: 'PUT',
        authorization: `Bearer ${token}`,
        body: {
            ficha,
            user_id
        }
    });
}
export async function me(token: string) {
    return await fetchApiData('me', {
        method: 'GET',
        authorization: `Bearer ${token}`,
    });
}