const url = 'https://lovetypewithanimals.netlify.app';

function setShare() {
    const resultImg = document.querySelector('#result-img');
    const resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '내 연애유형과 닮은 동물은  ,,';
    const shareDesc = infoList[resultAlt].name;
    const shareImage = `${url}/img/image-${resultAlt}.png`;
    const shareURL = `${url}/page/result-${resultAlt}.html`;

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDesc,
            imageUrl: shareImage,
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL,
            },
        },
        buttons: [
            {
                title: '결과보고 참여하기🧐',
                link: {
                    mobileWebUrl: shareURL,
                    webUrl: shareURL,
                },
            },
        ]
    });
}

// function kakaoShare() {
//     Kakao.Share.sendDefault({
//         objectType: 'feed',
//         content: {
//             title: '오늘의 디저트',
//             description: '아메리카노, 빵, 케익',
//             imageUrl:
//                 'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
//             link: {
//                 mobileWebUrl: 'https://developers.kakao.com',
//                 androidExecutionParams: 'test',
//             },
//         },
//         buttons: [
//             {
//                 title: '웹으로 이동',
//                 link: {
//                     mobileWebUrl: 'https://developers.kakao.com',
//                 },
//             },
//             {
//                 title: '앱으로 이동',
//                 link: {
//                     mobileWebUrl: 'https://developers.kakao.com',
//                 },
//             },
//         ]
//     });
// }