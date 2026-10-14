type PolicyType = 'auto' | 'hogar' | 'vida';
type PolicyStatus = 'activa' | 'expirada' | 'pendiente';

export interface Policy {
  id: string;
  holder: string;
  type: PolicyType;
  status: PolicyStatus;
  premium: number;
}