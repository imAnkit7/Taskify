let inputTask=document.getElementById('inputval')
let list=document.querySelector('.list')
window.addEventListener('keypress',(e)=>{
    if(e.key==="Enter"){
        handleClick()
    }
})
const handleClick=()=>{
    if(inputTask.value == ""){
        alert('please enter task')
    }
    else{
        // localStorage.setItem('todo',inputTask.value)
        let newEle=document.createElement('div')
        newEle.innerHTML=`${inputTask.value} <i class="fa-solid fa-trash"></i>`
        list.appendChild(newEle)
        inputTask.value=""
        newEle.querySelector('i').addEventListener('click',()=>{
            let a = confirm("Press a button!");
            if(a==true){
                newEle.remove()     
            }else{
                
            }
        })
    }
}
