// ******************************************************
// do not change - All rights reserved - Asaad Saad - MIU
// *********************************************************
import https from "https";

export default function get_data() {
    return new Promise((resolve, reject) => {
        https.get(`https://jsonplaceholder.typicode.com/todos`, resp => {
            let data = "";
            resp.on("data", chunk => data += chunk);
            resp.on("end", () => {
                let response_body = JSON.parse(data);
                resolve(response_body)
            });
        }).on("error", err => {
            reject("Error: " + err.message);
        });
    })
}

