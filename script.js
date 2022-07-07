const [Input1,Input2,Input3]=document.querySelectorAll('input')
//Input1.classList.add('nome')
//Input2.classList.add('senha')
Input3.classList.add('checkList')
const [texto1,texto2]=document.querySelectorAll('p')
texto1.classList.add('texto--um')
texto2.classList.add('texto--dois')

const fig=document.querySelector('button')
fig.classList.add('caixadois')
 function aparecer(){
    if(Input1.value && Input2.value.length>=6){
          fig.classList.remove('caixadois')       
          fig.classList.add('Caixadois')  
           
    }
    else{
        fig.classList.add('caixadois')       
        fig.classList.remove('Caixadois')  
      
    }
}


Input1.addEventListener('input',aparecer)
Input2.addEventListener('input',aparecer)
