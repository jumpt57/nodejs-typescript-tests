import hapi = require('hapi');

class HapiServer extends hapi.Server {

    portServer: number;

    constructor(port: number){
        super();
        this.portServer = port;
    }

    onStart(){
        this.connection({
            port: this.portServer
        });

        this.start((err: Error) => {
            if(err){
                throw err;
            }

            console.log('Server running at : ' + this.info.uri);
        });
    }
}

let server = new HapiServer(8080).onStart();