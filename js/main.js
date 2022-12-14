document.addEventListener(
    'DOMContentLoaded', function(){
        let dropBtn =  document.querySelector('.bi-list')
        dropBtn.addEventListener(
            'click', function(){
                console.log('working')
                let dropData = document.querySelector('.drop-down-data')
                if(!dropData.classList.contains('show')){
                    dropData.classList.add('show')
                }
                else{
                    dropData.classList.remove('show')
                }
            }
        )
    let cardParent = document.querySelector('.products-page')
    cardParent.querySelectorAll('.card').forEach(card => {
        card.onclick = function(){
            let products = document.querySelector('.products-page')
            products.querySelector('.content').style.display = 'none'
            show(this.dataset.page)
        }
    })

    // footer date
    const d = document.getElementById('date')
    let ft = new Date()
    d.innerHTML = ft.getFullYear();
    }
)

function show(cardId) {
    let products = document.querySelector('.products-page')
    document.querySelector('#soft').style.display = 'none'
    document.querySelector('#mob').style.display = 'none'
    document.querySelector('#web').style.display = 'none'
    
    products.querySelector('.content').style.display = 'none'
    try {
        document.querySelector(`#${cardId}`).style.display = 'block'
    } catch (error) {
        // not to return error
    }
    
    
}
