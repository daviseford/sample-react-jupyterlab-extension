import { JupyterFrontEndPlugin, ILayoutRestorer } from '@jupyterlab/application'
import { ICommandPalette } from '@jupyterlab/apputils'
import { activate } from './activate'

const extension: JupyterFrontEndPlugin<void> = {
  id: 'jl-extension-env',
  autoStart: true,
  requires: [ICommandPalette, ILayoutRestorer],
  activate,
}

export default extension
