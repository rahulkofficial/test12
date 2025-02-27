document.addEventListener('DOMContentLoaded',()=>{
    inp=document.getElementById('inp')
    btn=document.getElementById('btn')
    list=document.getElementById('list')
    er=document.getElementById('er')


    if (list.innerHTML===""){
        er.textContent="There is no tasks yet...."
    }


    btn.addEventListener('click',()=>{
        if(inp.value===""){
            er.textContent="Enter task...."
        }
        else{
            er.textContent=""
            const li=document.createElement('li')
            li.innerHTML=`<button class='com'>Complete</button><span>${inp.value}</span><button class='del'><img src='../images/delete.png' alt='db'></button>`
            list.appendChild(li)
            inp.value=""
        }

        const dels=document.querySelectorAll('ul li button.del')
        
        dels.forEach((item)=>{
            item.addEventListener('click',()=>{
                const parent=item.parentNode
                parent.remove()
                if (list.innerHTML===""){
                    er.textContent="There is no tasks yet...."
                }
            })
        })


        const coms=document.querySelectorAll('ul li button.com')
        
        coms.forEach((item)=>{
            item.addEventListener('click',()=>{
                const parent=item.parentNode
                parent.classList.add('co')
            })
        })


    })

    


})