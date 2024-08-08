let data = [];
let fname = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let pcountry = document.querySelector(".country");
let pscore = document.querySelector(".number");
let button = document.querySelector("button");
let section2 = document.querySelector(".section2");

let activeButtons = () =>{
    document.querySelectorAll(".button_group").
    forEach((ele,index)=>{
        ele.addEventListener("click",(e)=>{
            console.log(e);
            if(e.target.classList.contains("but1")){
                let score = parseInt(data[index].score);
                score += 5;
                data[index].score = score;
                updateDataOnUI();

            }else if(e.target.classList.contains("but2")){
                data[index].score -= 5;
                updateDataOnUI();

            }else if(e.target.classList.contains("del")){
               data.splice(index,1);
               updateDataOnUI();
            }
        })
    })
}


function updateDataOnUI(){
   data.sort(function(p1,p2){
    return p2.score - p1.score;
   })

    let showData = "";
    data.forEach(function(item){
      showData += `
      <div class= "button_group">
      <span>${item.fname}</span>
      <span>${item.lname}</span>
      <span>${item.country}</span>
      <span>${item.score}</span>
      <button class = "del">X</button>
      <button class = "but1">+5</button>
      <button class = "but2">-5</button>
      </div>
      `;
    })
    console.log(showData);
    section2.innerHTML = showData;
    activeButtons();
}

// console.log(data,fname,lname,pcountry,pscore,button);

button.addEventListener("click",function(e){
    e.preventDefault();

    if(fname.value === "" || lname.value === "" || pcountry.value === "" || pscore.value === ""){
        alert("Please fill all the field")
    }else{
       let playerObj = {
        fname : fname.value,
        lname : lname.value,
        country : pcountry.value,
        score : pscore.value
       }
       data.push(playerObj);
       updateDataOnUI();
    //    console.log(playerObj);
       fname.value = "";
       lname.value = "";
       pcountry.value = "";
       pscore.value = "";
    }
   
})
