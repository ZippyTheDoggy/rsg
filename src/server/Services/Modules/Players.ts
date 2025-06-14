import { Service } from "../Service";

export default class Players extends Service {
	// Service Properties
	// ...

	// Constructor & ServiceModule abstract functions
	constructor() {
		super("Players");

		// Event hooks -- game.GetService("").OnEvent.Connect(this.OnEvent);
        game.GetService("Players").PlayerAdded.Connect((player: Player) => this.onPlayerAdded(player));
	}
	public OnInitialized(): void {
		this.logger.info(`${this._module_name} initialized successfully`);
	}

    private onPlayerAdded(player: Player) {
        this.logger.info(`Player ${player.Name} joined.`);
    }

	// Service Methods
	// Event functions -- private function OnEvent(arg1: string, arg2: number) {}
}
