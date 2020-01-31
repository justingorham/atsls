import {Command, flags} from '@oclif/command'
import {StartCliPayload} from './app/custom-types'
import {configureStore} from './app/store'
import {startCli} from './app/actions'

class JustingorhamAtsls extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
    skipGit: flags.boolean({description: 'skip git initialization (if not in version control)', default: false}),
  }

  async run() {
    const {flags} = this.parse(JustingorhamAtsls)
    const start: StartCliPayload = {
      cwd: process.cwd(),
      force: flags.force,
      skipGit: flags.skipGit,
    }

    const store = configureStore()
    store.dispatch(startCli(start))

    // const name = flags.name || 'world'
    // this.log(`hello ${name} from .\\src\\index.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}

export = JustingorhamAtsls
