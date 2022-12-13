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
    }
)