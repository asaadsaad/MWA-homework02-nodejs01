import { Todo } from "./types";

export function format(response_body: Todo[]): Promise<{ [userId: number]: Todo[] }> {
    // write your code here
    // remove/replace the code below
    return Promise.resolve({ 1: [] })
}