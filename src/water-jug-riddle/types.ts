export type Step = {
  step: number;
  jug1Volume: number;
  jug2Volume: number;
  action: string;
  status?: 'solved';
};

export type SolutionError = string;

export type Solution = Step[] | SolutionError;
