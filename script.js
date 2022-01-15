const container = document.querySelector('.container')
const filterBtn = document.querySelectorAll('.filterBtn')


const products = [
    {
        id:1,
        title:"Lada",
        img: "https://images.unsplash.com/photo-1495013034289-3664878e32f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptate debitis. Exercitationem commodi nisi laudantium autem ipsam perspiciatis asperiores porro!",
    },

    {
        id:2,
        title:"BMW",
        img: "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptate debitis. Exercitationem commodi nisi laudantium autem ipsam perspiciatis asperiores porro!",
    },

    {
        id:3,
        title:"Mercedes",
        img: "https://images.unsplash.com/photo-1501066927591-314112b5888e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptate debitis. Exercitationem commodi nisi laudantium autem ipsam perspiciatis asperiores porro!",
    },

    {
        id:5,
        title:"BMW",
        img: "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        text: "This is the new BMW Z something!",
    },

    {
        id:6,
        title:"Mercedes",
        img: "https://images.unsplash.com/photo-1556448990-e7385a499333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        text: "Mercedes, it's your best choice",
    },


    {
        id:7,
        title:"Jeep",
        img: "https://images.unsplash.com/photo-1588899451848-d1e3418c126f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        text: "This is yet another JEEP!",
    },


    {
        id:8,
        title:"Lada",
        img: "https://images.unsplash.com/photo-1549524570-c2e6f1436aef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1081&q=80",
        text: "Lada is always lada...not bad",
    },


]


window.addEventListener('DOMContentLoaded', function(){

    filterBtn.forEach((bt)=>{
        bt.addEventListener('click', function(e){
            let title = e.currentTarget.dataset.id
            let filtered = products.filter((titleName)=>{
                if (titleName.title === title){
                    return titleName
                }

              
            })

            if (title === "all"){
                allItems(products)
            }else{
                allItems(filtered)
            }
        })
    })

    allItems(products)
   
})


function allItems(item){
    let allProducts = item.map(function(items){
        return(
        `
        <div class="allProducts">

        <div class="title">
            <h1>${items.title}</h1>
        </div>

        <div class="img">
            <img src=${items.img} alt="">         
        </div>

        <div class="text">
            <p>${items.text}</p>
        </div>
      
    
    </div>
    
        
        `
        )
    })

    allProducts = allProducts.join("")
  
    container.innerHTML = allProducts

}