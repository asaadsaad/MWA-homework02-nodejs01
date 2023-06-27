// ******************************************************
// do not change - All rights reserved - Asaad Saad - MIU
// ******************************************************
import get_data from "./data";
import { format } from "./format";
import { Todo } from "./types";

(async function start() {
    const response_body: Todo[] = await get_data() as Todo[];
    const desired_response = await format(response_body);
    console.log(desired_response);
})()





