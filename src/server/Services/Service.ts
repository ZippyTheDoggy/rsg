import type { ServicesList } from ".";
type PrintType = string | number | boolean;
export class ModuleLogger {
	private _module_name: string;

	public info = (...msg: (PrintType | PrintType[])[]) => print(`[${this._module_name}]: ${msg.join(" ")}`);
	public warn = (...msg: (PrintType | PrintType[])[]) => warn(`[${this._module_name}]: ${msg.join(" ")}`);
	public error = (...msg: (PrintType | PrintType[])[]) => error(`[${this._module_name}]: ${msg.join(" ")}`);

	constructor(name: string) {this._module_name = name; }
}

export abstract class Service {
	public readonly _module_name: string;
	public logger: ModuleLogger;
	private services?: ServiceList;

	constructor(mod_name: string) {
		this._module_name = mod_name;
		this.logger = new ModuleLogger(mod_name);
	}

	public InitServices(services: ServiceList): void {
		this.services = services;
	}
	public OnInitialized?(): void {
		this.logger.info(`${this._module_name} initialized.`);
	}
}
export type ServiceList = ServicesList;
