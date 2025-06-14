// import TheService from "./Modules/TheService";

import Players from "./Modules/Players";

type ModuleInfo = {
	Players: Players
};
export const Services = {
	Players: new Players() as Players,
};
export type ServicesList = { [K in keyof ModuleInfo]: ModuleInfo[K] };
