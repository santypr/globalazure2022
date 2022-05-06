import * as signalR from "@microsoft/signalr";

const URL = "https://realwarssignalr-api.azurewebsites.net/hub";

class WarService {
    private connection: signalR.HubConnection;
    static instance: WarService;
    private countArmy: (e: any) => void;

    constructor() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(URL)
            .withAutomaticReconnect()
            .build();
        this.connection.start()
            .catch(err => { document.write(err) });

        this.connection.on("enlistReceived", (tribe: string): void => {
            console.log('warrior enlisted in ' + tribe + ' :-)');
            this.countArmy(tribe);
        });
        this.countArmy = () => { console.log('countArmy not defined')}
    }
    public setEnlistEvent = (enlistEvent: (e: any) => void) => {
        this.countArmy = enlistEvent;
    }
    public enlist = (tribe: string) => {
        this.connection.send("Enlist", tribe)
            .then(x => console.log(tribe + " request one warrior!!!"))
    }

    public static getInstance(): WarService {
        if (!WarService.instance)
            WarService.instance = new WarService();
        return WarService.instance;
    }
}

export default WarService.getInstance();