import client from "./client.js";

const init = async () => {
    await client.expire("user:1", 10); // for expire the value after 10 seconds
    const res = await client.get("user:1"); // for getiing the set value 

    const setUser = await client.set("user:3", "Ramesh"); //for setting a new key with value in redis
    console.log(res)
}

init();