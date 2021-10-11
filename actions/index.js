import { STATUS } from "../constants";

export const fetchingData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(STATUS)
    });

   return await response.json();
}