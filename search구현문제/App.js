import SearchInput from "./SearchInput.js";
import Suggestion from "./Suggestion.js";
import { fetchLanguages } from "./api.js";

export default function App({ $target }) {
    this.state = {
        fetchedLanguages: [],
        selectedLanguages: [],
    };

    this.setState = (nextState) => {
        //다음상태 추가하기
        this.state = {
            ...this.state,
            ...nextState,
        };
        //추천의 상태바꾸기는 페칭된 언어
        suggestion.setState({
            selectedIndex: 0,
            items: this.state.fetchedLanguages,
        });
    };

    const searchInput = new SearchInput({
        $target,
        initialState: "",
        //바뀌면 키워드 길이가 0보다 클때만 데이터 들고와서 fetchedLanguages에 넣기
        onChange: async (keyword) => {
            if (keyword.length === 0) {
                this.setState({
                    fetchedLanguages: [],
                });
            } else {
                const languages = await fetchLanguages(keyword);
                this.setState({
                    fetchedLanguages: languages,
                });
            }
        },
    });

    const suggestion = new Suggestion({
        $target,
        initialState: {
            cursor: 0,
            items: [],
        },
    });
}
