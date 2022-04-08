import * as core from '@actions/core'

async function Run()
{
    try {
        core.startGroup('github context')
        console.log(`${core.getInput('github-context')}`)
        core.endGroup()

        core.startGroup('env context')
        console.log(`${core.getInput('env-context')}`)
        core.endGroup()
    } catch (ex: any) {
        core.setFailed(ex.message)
    }
}

Run()
