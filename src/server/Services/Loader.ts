import { Services } from ".";
export function LoadServices() {
    // eslint-disable-next-line roblox-ts/no-array-pairs
    for(const [_, service] of pairs(Services)) {
        service.InitServices(Services);
        if(service.OnInitialized !== undefined) service.OnInitialized();
    }
}