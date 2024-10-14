const backBtn = document.getElementById('back-btn');

window.addEventListener('scroll',() => {
    // 画面のスクロール量をpx（ピクセル）数で取得する
    const scrollValue = document.scrollingElement.scrollTop;

    if(scrollValue >= 300) {        
        backBtn.style.display = 'inline';
    } else {
        backBtn.style.display = 'none';
    }
})