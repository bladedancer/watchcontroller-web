const { watchPromiseClient: watchClient } = require('./watch_grpc_web_pb.js');
const { Request } = require('./watch_pb.js');

function watch(hostname, orgId, link, token, callbacks = {}) {
    let client = new watchClient(hostname);

    let cb = {
        data: callbacks.data || ((r) => {
            console.log('data', r);
        }),
        metadata: callbacks.metadata || ((m) => {
            console.log('metadata', m);
        }),
        status: callbacks.status || ((s) => {
            console.log('status', s);
        }),
        error: callbacks.error || ((e) => {
            console.log('error', e);
        }),
        end: callbacks.end || ((e) => {
            console.log('end', e);
        }),
    }

    let req = new Request();
    req.setSelflink(link);
    req.setToken("Bearer " + token);
    
    let stream = client.subscribeOne(req, {
        "authorization": "Bearer " + token,
        "x-axway-tenant-id": orgId
    });

    Object.keys(cb).forEach(k => stream.on(k, cb[k]));
}

// Probably a better way to do this but hey I'm rusty
window.watch = watch;