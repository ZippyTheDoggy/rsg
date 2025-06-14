import { Service } from "../Service";

export default class TemplateModule extends Service {
	// Service Properties
	// ...

	// Constructor & ServiceModule abstract functions
	constructor() {
		super("TemplateModule");

		// Event hooks -- game.GetService("").OnEvent.Connect(this.OnEvent);
	}
	public OnInitialized(): void {
		this.logger.info(`${this._module_name} initialized successfully`);
	}

	// Service Methods
	// Event functions -- private function OnEvent(arg1: string, arg2: number) {}
}
