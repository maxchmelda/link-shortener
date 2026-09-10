import axios from "axios";









export default async function shortenUrl(url: string) : Promise<string> {
    const res = await axios.post(
        '/api/links',
        { url }
    )

    const shortened = res.data.shortened;

    return shortened;
}