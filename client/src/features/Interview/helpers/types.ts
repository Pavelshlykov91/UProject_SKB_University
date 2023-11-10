export interface Reaction {
  node: React.ReactNode;
  label: string;
  key?: string;
  id: number
}


export interface ReactionCounterObject {
  node: JSX.Element;
  label: string;
  by: string;
}
