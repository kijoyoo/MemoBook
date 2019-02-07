const form = document.querySelector(".main_column"),
    input = form.querySelector(".nameQues"),
    name = document.querySelector(".main_name");

const GET_NAME = "name",
    SHOWING_LS = "showing";

    function saveName(text){
    localStorage.setItem(GET_NAME, text);
}

    function handleSubmit(event){
        event.preventDefault();
        const currentValue = input.value;
        painting(currentValue);
        saveName(currentValue);
        input.value = "";
    }

    function askName(){
        form.classList.add(SHOWING_LS);
        form.addEventListener("submit", handleSubmit);
    }

    function painting(text){
        form.classList.remove(SHOWING_LS);
        name.classList.add(SHOWING_LS);
        name.innerText = `Hello ${text}`;
    }

    function loadName(){
        const loadName = localStorage.getItem(GET_NAME);
        if(loadName === null){
            askName();
        }else{
          painting(loadName);
        }
    }

    function init(){
        loadName();
    }
    init();