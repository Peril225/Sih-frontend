// Will work on this

export interface resp {
  body: {
    id: string;
  };
}

export interface VAL {
  value: { name: string; value: string };
}

export interface TSignup {
  username: string;
  email: string;
  password: string;
}

export interface TSignIp {
  email: string;
  password: string;
  history: (val: string) => void;
  dispatch: (val: { type: string }) => void;
}

export interface SearchProps {
  placeholder: string;
  setShowState: (val: boolean) => void;
  // setShowState: () => void;
}

export interface IndiaMap {
  // hide: boolean;
  // x: number;
  // y: number;
  hide: boolean;
  ChangeState: (val: string) => void;
  onLocationClick: (val: any) => void;
}

export interface TPieDonut {
  Current: string;
  pievals: number[3];
}

export interface STATE {
  auth: {
    LOGGED: boolean;
  };
}

interface ACTION {
  type: string;
}
