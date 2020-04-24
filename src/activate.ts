import { JupyterFrontEnd, ILayoutRestorer } from '@jupyterlab/application'
import { ICommandPalette, MainAreaWidget, WidgetTracker } from '@jupyterlab/apputils'
import { EXTENSION_ID, EXTENSION_NAME, OPEN_COMMAND } from './enums'
import { ReactAppWidget } from './classes/App'

export const activate = (app: JupyterFrontEnd, palette: ICommandPalette, restorer: ILayoutRestorer): void => {
  console.log(`JupyterLab extension ${EXTENSION_ID} is activated!`)

  // Create a single widget
  let widget: MainAreaWidget<ReactAppWidget>

  // Add an application command
  const command = OPEN_COMMAND
  app.commands.addCommand(command, {
    label: EXTENSION_NAME,
    execute: () => {
      if (!widget) {
        const content = new ReactAppWidget()
        widget = new MainAreaWidget({ content })
        widget.id = EXTENSION_ID
        widget.title.label = EXTENSION_NAME
        widget.title.closable = true
      }
      if (!tracker.has(widget)) {
        tracker.add(widget)
      }
      if (!widget.isAttached) {
        // Attach the widget to the main work area if it's not there
        app.shell.add(widget, 'main')
      }

      // Activate the widget
      app.shell.activateById(widget.id)
    },
  })

  // Add the command to the palette.
  palette.addItem({ command, category: 'React Redux Extension' })

  const tracker = new WidgetTracker<MainAreaWidget<ReactAppWidget>>({
    namespace: EXTENSION_ID,
  })

  restorer.restore(tracker, {
    command: OPEN_COMMAND,
    name: () => EXTENSION_ID,
  })
}
