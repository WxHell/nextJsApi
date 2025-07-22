import api from "@/lib/axiosInstance";
export async function fetchAllNews() {
    const res = await api.get('/news');
    return res.data.news;
}


export async function fetchNewsById(id) {
    const res = await api.get(`/news/${id}`)
    return res.data._id;
}
export async function fetchCategoryByNews(slug) {
    const res = await api.get(`/category/${slug}/news`)
    return res.data.data;
}
export async function fetchCategory() {
    const res = await api.get(`/category`);
    return res.data.category;
}
