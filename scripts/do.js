//const boardURL = "/ArticleList.nhn?search.clubid=27842958&search.boardtype=L&search.menuid=&search.marketBoardTab=D&search.specialmenutype=&userDisplay=15&search.page="

document.querySelector('#cafe_main').addEventListener("load", (event) => {
    console.log(`readystate: ${document.readyState}\n`);
        
    // cafe_main 속 게시판 문서 찾기
    var cafeMain = document.querySelector('#cafe_main').contentDocument;

    // cafeMain 내의 모든 게시판 제목 리스트 찾기
    var trList = cafeMain.querySelectorAll('.article-board .td_article');

    //게시판 제목 검사로직
    for (var i = 0; i < trList.length; i++) {
        var innerNameA = trList[i].querySelector('.board-name .inner_name a');
        var boardName = innerNameA ? innerNameA.textContent : "";

        if (boardName.includes('~~시 게시판')) {
            // 조건에 맞는 tr 태그 삭제
            trList[i].parentNode.remove();
        }
    }
});