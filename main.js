let tweet = document.querySelector("#send")

tweet.addEventListener('click', () => {
    event.preventDefault();
    
    const timeLine = document.querySelector("#cards")
    const input = document.querySelector("#textSpace")
    const valor = input.value

    if (valor.length == 0 || valor == " ") {
        return;    
    }
    
    const tarefa = document.createElement('div')
    tarefa.classList.add('tweet')
    
    const conteudo = 
    `
    <div class="tweet-header">
    <img src="/assets/imagens/user.png" alt="">
</div>

<div class="content">
   <div class="name">
       <h4>user</h4>
       <h5>@admin</h5>
   </div>

   <div class="content-tweet">
                <p>${valor}.</p>
    </div>

   <div class="tweetBtn">
       <button class="btnPequeno">
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6666 1.66675L3.33325 1.66675L1.66658 1.66675V3.33342L1.66658 18.3334H3.33325L3.33325 3.33342L16.6666 3.33342V13.3334L4.99992 13.3334V15.0001H3.33346V16.6667H5.00012V15.0001L16.6666 15.0001H18.3333V13.3334V3.33342V1.66675L16.6666 1.66675Z" fill="black"/>
           </svg>
       </button>
       <button class="btnPequeno">
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.4V8.2H2.8V6.4H4.6L4.6 17.2H6.4V19H10.9V17.2H6.4L6.4 6.4H8.2V8.2H10V6.4H8.2V4.6H6.4V2.8H4.6V4.6H2.8V6.4H1ZM17.2 15.4V13.6L19 13.6V11.8H17.2V13.6H15.4L15.4 2.8H13.6V1H9.1V2.8H13.6L13.6 13.6H11.8L11.8 11.8H10V13.6L11.8 13.6V15.4H13.6V17.2H15.4V15.4H17.2Z" fill="black"/>
           </svg>
       </button>
       <button class="btnPequeno">
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M7.54545 2H4.27273V3.63636H2.63636V5.27273H1V10.1818H2.63636V11.8182H4.27273V13.4545H5.90909V15.0909H7.54545V16.7273H9.18182V18.3636H10.8182V16.7273H12.4545V15.0909H14.0909V13.4545L15.7273 13.4545V11.8182H17.3636V10.1818H19V5.27273H17.3636V3.63636H15.7273V2H12.4545V3.63636H10.8182V5.27273H9.18182V3.63636H7.54545V2ZM7.54545 3.63636V5.27273H9.18182V6.90909H10.8182V5.27273H12.4545L12.4545 3.63636H15.7273L15.7273 5.27273H17.3636V10.1818H15.7273V11.8182H14.0909V13.4545H12.4545L12.4545 15.0909H10.8182V16.7273H9.18182V15.0909H7.54545V13.4545L5.90909 13.4545V11.8182H4.27273V10.1818H2.63636V5.27273H4.27273V3.63636H7.54545Z" fill="black"/>
           </svg>
       </button>
       <button class="btnPequeno">
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 11.6667L2.5 15.8333V17.5H4.16667H15.8333H17.5V15.8333V11.6667H15.8333V15.8333H4.16667V11.6667H2.5ZM9.16667 3.33333V5H7.5V6.66667H5.83333V8.33333H7.5V6.66667H9.16667V15H10.8333V3.33333H9.16667ZM10.8333 5H12.5V6.66667H10.8333V5ZM12.5 6.66667H14.1667V8.33333H12.5V6.66667Z" fill="black"/>
           </svg>
       </button>
   </div>
</div>
    `
    
    tarefa.innerHTML = conteudo
    
    timeLine.prepend(tarefa)
    input.value = ""
})


