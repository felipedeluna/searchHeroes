import axios from "axios";
import { createHash } from "crypto";

const BASE_URL = "https://gateway.marvel.com:443/v1/public/"
const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY;
const PRIVATE_KEY = process.env.NEXT_PRIVATE_KEY;

export async function buscarHerois(nomeIniciaCom = '',nome = '', limite = 20) {
    
    const ts = new Date().getTime().toString();

    const hash = createHash("md5")
    .update(ts + PRIVATE_KEY + PUBLIC_KEY)
    .digest("hex");

    console.log(hash)
    console.log(ts)
    console.log(PUBLIC_KEY)
    console.log(PRIVATE_KEY)

    try {
        const response = await axios.get(`${BASE_URL}characters`, {
            params: {
            apikey: PUBLIC_KEY,
            ts,
            hash,
            limit: limite,
            orderBy: "modified",
            ...(nomeIniciaCom && { nameStartsWith: nomeIniciaCom }),
            ...(nome && {name: nome})
            },
        });
        return response.data.data.results;
    } catch (erro) {
        console.error("Erro ao buscar heróis:", erro);
        return [];
    }
}
