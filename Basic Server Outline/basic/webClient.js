module.exports = class webClient {
    constructor(ws){
        this.con = ws;
        this.handlers = this.handler();
        this.con.on('message',this.msgHandler.bind(this))
    }
    msgHandler(data){
        let keys = Object.keys(this.handlers);
        for(let u in keys){
            if(data == keys[u]){
                this.handlers[keys[u]](data);
            }
        }
    }
    handler(){
        return {
            broad:()=>{
                this.broadcast('hello all');
            },
            close:()=>{
                this.con.close();
            }
        }
    }
    update(data){
        this.con.send(data)
    }

}