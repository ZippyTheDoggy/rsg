/*
USAGE:
    import Services from "...";
    Services["ServiceName"].ServiceMethod(...args);
    let a = Services["ServiceName"].ServiceProperty;
    Services["ServiceName"].ServiceProperty = value;

SERVICE MANAGEMENT:
    To add a new service (using PlayerDataService as an example):
        1. Create a new file in server/Services/Modules: `PlayerDataService.ts`
        2. Export a default class that extends Service: `export default class PlayerDataService extends Service {};`
        3. In server/Services/index.ts:
            a. Add the type to `type ModuleInfo` as such: `PlayerDataService: PlayerDataService;`
            b. Add the instantiation to the `const services` as such: `PlayerDataService: new PlayerDataService() as PlayerDataService,`

Service:
    - This is a base class for all services.
    - It provides some utility functions, and a logger.
    - There are abstract methods automatically called if defined:
        - `OnInitialized`: Called when the service is initialized.

*/
