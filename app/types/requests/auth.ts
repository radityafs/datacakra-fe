export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  statusCode?: number;
  code?: number;
  data?: {
    Id: string;
    Token: string;
    Name: string;
  };
}

export interface RegisterResponse {
  message: string;
  statusCode?: number;
  error?: string;
  code?: number;
  data?: {
    Id: string;
    Email: string;
    Name: string;
  };
}
