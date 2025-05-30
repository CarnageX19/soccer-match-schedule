import conf from "../global-configs/vite-confs.js";

export class Service {
    async getSoccerMatches() {
        const url = conf.backendUrl;

        try {
            const res = await fetch(url);   
            const data = await res.json();
            return data
        } catch (error) {
            console.error(`Error while fetching: ${error}`);
        }
    }
}

const footballService = new Service();
export default footballService;