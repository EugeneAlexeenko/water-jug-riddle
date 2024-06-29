type Step = {
  step: number;
  jug1Volume: number;
  jug2Volume: number;
  action: string;
  status?: 'solved';
};

type SolutionError = string;

type Solution = Step[] | SolutionError;
