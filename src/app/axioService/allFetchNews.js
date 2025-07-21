import api from "@/lib/axiosInstance";
export async function fetchAllNews() {
    const res = await api.get('/news');
    return res.data.news;
}

