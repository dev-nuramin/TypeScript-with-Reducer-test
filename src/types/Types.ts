export type infoProps = {
  title: String;
  desc: String;
  amount: number;
  isAdmin: boolean;
  devs?: {
    name: string;
    age: number;
    skill: boolean;
  };
  // desclear on string not number or boolean
  foods?: string[];
  users?: { name: string; age: number; skill: boolean }[];
};


export type buttonProps = {
  children : React.ReactNode;
  handleButtonClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;

}

export type counterState = {
  count: number
};

export type counterReducerType = {
  type : "desc" | "inc" | "reset"
  payload? : number
}