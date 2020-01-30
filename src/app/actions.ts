import {action, payload} from 'ts-action'

export const checkForGitInstalled = action('[Git] check for git installed')
export const gitIsInstalled = action(
  '[Git] is installed',
  payload<{ isInstalled: boolean }>()
)
