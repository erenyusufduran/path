export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

type LoggerServiceCallback = (arg: string) => void;

export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCb(arg: string, callback: LoggerServiceCallback) {
  if (!arg) {
    callback('Invalid argument!');
    return;
  }
  callback(`Called function with ${arg}`);
  return arg.toUpperCase();
}
