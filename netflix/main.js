const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//selecionar a tab 
function selectItem(e) {
    removeBorder();
    removeShow();
    //adicionar borda para a tab selecionada
    this.classList.add('tab-border');
    //pegar item conteudo do DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //aadiconar classe show 
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}
//escutar clique nas tabs
tabItems.forEach(item => item.addEventListener('click', selectItem));