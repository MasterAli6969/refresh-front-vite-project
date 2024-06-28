export interface AuthInputDataTypes {
  login: string;
  passw: string;
}

export interface AuthPostDataTypes {
  request: string;
  apiKey: number;
  data: AuthInputDataTypes;
}

export interface errorsDataTypes {
  login: boolean;
  passw: boolean;
}
