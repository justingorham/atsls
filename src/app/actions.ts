import {action, payload} from 'ts-action'
import {StartCliPayload} from './custom-types'

const cli = '[cli]'
const git = '[Git]'

export const checkForGitInstalled = action(`${git} check for git installed`)
export const gitIsInstalled = action(
  `${git} is installed`,
  payload<{ isInstalled: boolean }>()
)
export const startCli = action(`${cli} Start cli`, payload<StartCliPayload>())
