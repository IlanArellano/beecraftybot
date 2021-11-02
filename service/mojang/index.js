const axios = require('axios');
const MOJANGAPIMAIN = process.env.MOJANGAPIMAIN ?? "";

const getUUID = async ({username}) => {
    try {
        const res = await axios.default.get(`${MOJANGAPIMAIN}/profiles/minecraft/${username}`);
        if(res.status === 200 && res.data) {
            return res.data;
        }
    } catch (error) {
        
    }
}

