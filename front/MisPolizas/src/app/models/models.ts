export interface Policy {
    id: string;
    holder: string;
    type: 'auto' | 'hogar' | 'vida';
    status: 'activa' | 'expirada' | 'pendiente';
    premium: number;
}