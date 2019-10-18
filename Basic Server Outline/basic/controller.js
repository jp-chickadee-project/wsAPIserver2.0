const webClient = require('./webClient');
module.exports = class controller {
    constructor(ws){
        this.server = ws;
        this.connections = [];
        this.server.on('connection',this.establishConnection.bind(this)
        );
        setInterval(this.updateClients.bind(this,'ping'),1000);
    }
    establishConnection(ws){
        let uu = new webClient(ws);
        uu.broadcast = this.updateClients.bind(this);
        this.connections.push(uu);
    }
    updateClients(data){
        let u = this.connections;
        for(let y in u){
            u[y].update(data);
        }
    }
}