export default function Suggestion({ $target, initialState }) {
    this.$element = document.createElement("div");
    this.$element.className = "Suggestion";

    $target.appendChild(this.$element);

    this.state = {
        selectedIndex: 0,
        items: initialState.items,
    };

    //상태 바꾸기
    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState,
        };
        this.render();
    };

    //렌더링하기
    this.render = () => {
        //상태에 아이템 들고와서 배열로 만들기
        const { items = [] } = this.state;

        //하나라도 있으면
        if (items.length > 0) {
            this.$element.style.display = "block";
            this.$element.innerHTML = `
          <ul>
            ${items
                .map(
                    (item, index) => `
              <li data-index="${index}">${item}</li>
              </li>
            `
                )
                .join("")}
          </ul>
        `;
            //조인으로 item li한거 문자열로 변환해서 탬플릿 리터럴..
            //li data-index

            //없으면 안보이게
        } else {
            this.$element.style.display = "none";
            this.$element.innerHTML = "";
        }
    };

    this.render();
}
