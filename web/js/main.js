const centralCtrl = document.getElementById("central");
const orgCtrl = document.getElementById("orgid");
const topicCtrl = document.getElementById("watchtopic");
const tokenCtrl = document.getElementById("token");
const watchBtn = document.getElementById("watchBtn");
const output = document.getElementById("output");
const form = document.querySelector('#config form');

// Typing is hard
topicCtrl.value = "grpcweb";
centralCtrl.value = "https://gmatthews.dev.ampc.axwaytest.net"
orgCtrl.value = "300558949654437"

let callbacks = {
    end: (e) => { 
        console.log("Stream closed", e);
        reset(); 
    },
    error: (e) => {
        console.log("Error - reconnecting", e);
        startWatch();
    },
    data: (d) => {
        console.log("data", d);
        let types = ["created", "updated", "deleted", "subresource updated"];
        addEvent({
            name: d.getPayload().getName(),
            kind: d.getPayload().getKind(),
            type: types[d.getType()],
            time: d.getTime()
        });
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (form.checkValidity()) {
        output.innerHTML = "";
        startWatch();
    }

    form.classList.add('was-validated');
}, false);

function reset() {
    watchBtn.removeAttribute('disabled', false);
}

function addEvent(detail) {
    console.log(detail);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<div class="card-body">
    <h5 class="card-title">${detail.name} (${detail.kind})</h5>
    <p class="card-text">${detail.type} at ${detail.time}</p>
  </div>`;
    output.appendChild(card);
}

function startWatch() {
    let hostname = centralCtrl.value || 'https://apicentral.axway.com';
    let selfLink = '/management/v1alpha1/watchtopics/' + topicCtrl.value;
    let token = tokenCtrl.value;
    let orgId = orgCtrl.value;

    console.log("Starting watch on " + hostname + "/apis" + selfLink);
    watch(hostname, orgId, selfLink, token, callbacks);
    watchBtn.setAttribute('disabled', true);
}