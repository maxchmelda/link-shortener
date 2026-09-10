export function normalizeUrl(url: string): string {
    return /^https?:\/\//.test(url) ? url : `https://${url}`;
}

export default function isUrlValid(url: string) {
    try {
        const parsed = new URL(normalizeUrl(url));

        const looksLikeDomain = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(parsed.hostname);
        return looksLikeDomain || parsed.hostname === "localhost";
    } catch {
        return false;
    }
}
