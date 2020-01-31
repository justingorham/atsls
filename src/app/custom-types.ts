import {ShellString} from 'shelljs'

export interface StartCliPayload {
  cwd: string;
  cliDir: string;
  force: boolean;
  skipGit: boolean;
}

export interface EpicDependencies {
    which: (command: string) => ShellString;
}
