const startBtn = document.querySelector("#main button");
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const FADEIN = "fadeInClick";
const FADEOUT = "fadeOutClick";
const HIDDEN_CLASS = "hidden";

const select = [];

function calResult() {
    //결과를 계산할 배열 생성
    const pointArray = [
        { name: 'mouse', value: 0, key: 0 },
        { name: 'cow', value: 0, key: 1 },
        { name: 'tiger', value: 0, key: 2 },
        { name: 'rabbit', value: 0, key: 3 },
        { name: 'dragon', value: 0, key: 4 },
        { name: 'snake', value: 0, key: 5 },
        { name: 'horse', value: 0, key: 6 },
        { name: 'sheep', value: 0, key: 7 },
        { name: 'monkey', value: 0, key: 8 },
        { name: 'chick', value: 0, key: 9 },
        { name: 'dog', value: 0, key: 10 },
        { name: 'pig', value: 0, key: 11 },
    ]
    for (let i = 0; i < 12; i++) {
        const target = qnaList[i].a[select[i]];
        for (let j = 0; j < target.type.length; j++) {
            for (let k = 0; k < pointArray.length; k++) {
                if (target.type[j] === pointArray[k].name) {
                    pointArray[k].value++;
                }
            }
        }
    }

    const resultArray = pointArray.sort(function (a, b) {
        if (a.value > b.value) {
            return -1;
        }
        if (a.value < b.value) {
            return 1;
        }
        return 0;
    });
    let resultKey = resultArray[0].key;

    console.log(resultArray);
    console.log(resultKey);
    return resultKey;
}

function addAnswer(lalala, qIdx, aIdx) {
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
                // console.log(answerBtnAll[i]);
                answerBtnAll[i].disabled = true;
                answerBtnAll[i].style.display = 'none';
            }
            select[qIdx] = aIdx; //빈 배열의 몇번째 질문에 몇번째 답변이 담기는지 정보 담기
            qnaShow(++qIdx);
        } else {
            select[qIdx] = aIdx;
            console.log(select);
            qna.classList.add(FADEOUT);
            setTimeout(() => {
                result.classList.add(FADEIN);
                setTimeout(() => {
                    qna.classList.toggle(HIDDEN_CLASS)
                    result.classList.toggle(HIDDEN_CLASS);
                }, 0)
            }, 0)

            calResult();
        }
    });
}

function qnaShow(qIdx) {
    const qbox = document.querySelector(".qBox");
    qbox.innerHTML = qnaList[qIdx].q;

    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }

    const progress = document.querySelector(".progress-bar");
    // console.log(qIdx);
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