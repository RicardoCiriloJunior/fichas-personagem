export type Opcoes = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    authorization?: string;
    body?: unknown;
}