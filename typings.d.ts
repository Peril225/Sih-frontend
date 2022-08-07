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
}

export interface SearchProps {
  placeholder: string;
  setShowState: (val: boolean) => void;
  // setShowState: () => void;
}

export interface IndiaMap {
  ChangeState: (val: string) => void;
  onLocationClick: (val: any) => void;
}

export interface TPieDonut {
  Current: string;
  pievals: number[3];
}
