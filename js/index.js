const startBtn = document.querySelector("#main button");
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const FADEIN = "fadeInClick";
const FADEOUT = "fadeOutClick";
const HIDDEN_CLASS = "hidden";

function addAnswer(lalala, qIdx) {
    const answerbox = document.querySelector(".answerBox");
    const answerButton = document.createElement("button");
    answerbox.appendChild(answerButton);
    answerButton.innerHTML = lalala;
    answerButton.classList.add("answerList");
    // console.log(answerButton.classList);
    answerButton.classList.add(FADEIN);

    answerButton.addEventListener("click", function () {
        if (qIdx < 11) {
            const answerBtnAll = document.querySelectorAll(".answerBox button");
            // console.log(answerBtnAll);
            for (let i = 0; i < answerBtnAll.length; i++) {
                console.log(answerBtnAll[i]);
                answerBtnAll[i].disabled = true;
                answerBtnAll[i].style.display = 'none';
            }
            // answerButton.classList.remove(FADEIN);
            // answerButton.classList.add(FADEOUT);
            // console.log(qIdx);
            qnaShow(++qIdx);
        } else {
            qna.classList.add(FADEOUT);
            setTimeout(() => {
                result.classList.add(FADEIN);
                setTimeout(() => {
                    qna.classList.toggle(HIDDEN_CLASS)
                    result.classList.toggle(HIDDEN_CLASS);
                }, 0)
            }, 0)
        }
    });
}

function qnaShow(qIdx) {
    const qbox = document.querySelector(".qBox");
    qbox.innerHTML = qnaList[qIdx].q;

    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx);
    }

    const progress = document.querySelector(".progress-bar");
    console.log(qIdx);
    // progress.style.width = `${(qIdx + 1) * 8}%`;
    progress.style.width = `${(100 / 12) * (qIdx + 1)}%`;
    progress.innerHTML = `${Math.floor((100 / 12) * (qIdx + 1))}%`;
}

function startBtnClick() {
    // main.style.animation = "fadeOut 1s";
    // setTimeout(() => {
    //     qna.style.animation = "fadeIn 1s";
    //     setTimeout(() => {
    //         main.classList.toggle(HIDDEN_CLASS);
    //         qna.classList.toggle(HIDDEN_CLASS);
    //     }, 450);
    // }, 450);
    main.classList.add(FADEOUT);
    setTimeout(() => {
        qna.classList.add(FADEIN);
        setTimeout(() => {
            main.classList.toggle(HIDDEN_CLASS);
            qna.classList.toggle(HIDDEN_CLASS);
        }, 0);
        let qIdx = 0;
        qnaShow(qIdx);
    }, 0)
}

startBtn.addEventListener("click", startBtnClick);