export const API_END_POINT = "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev";
// 여기에 캐시하기
const cache = {};

const request = async (url) => {
    if (cache[url]) {
        return cache[url];
    }

    const res = await fetch(url);

    if (res.ok) {
        const json = await res.json();
        //해당 url 키워드가 같은 키에 그 json을 뿌림
        cache[url] = json;
        return json;
    }

    throw new Error("요청에 실패함");
};

export const fetchLanguages = async (keyword) => request(`${API_END_POINT}/languages?keyword=${keyword}`);
