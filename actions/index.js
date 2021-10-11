export const fetchingData = async (moves) => {
    // Simulate post response with json placeholder free api
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            status: 'OK',
            message: "You're doing it great!",
            totalMoves: moves
        })
    });

   return await response.json();
}