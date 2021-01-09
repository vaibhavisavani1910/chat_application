class chatUI{
    constructor(list){
       this.list = list;
    }
    render(data){
        const date = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            {addSuffix: true}
          )
        const temp = `<li class="list-group-item">
            <span class="username">${data.username} </span> 
            <span class="msg">${data.msg}</span> 
            <div class="time">${date}</div> 
        </li>`;

        this.list.innerHTML += temp;
    }
    clear(){
        this.list.innerHTML = '';
    }
}