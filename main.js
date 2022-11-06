const fileextend ='.png'
let db=[
    {
        name:'Пласкогубці',
        id: '00001',
        pic:'00001'+fileextend
    },
    {
        name:'Молоток',
        id: '00002',
        pic:'00002'+fileextend
    },
    {
        name:'Викрутка',
        id: '00003',
        pic:'00003'+fileextend
    },
    {
        name:'Пила',
        id: '00004',
        pic:'00004'+fileextend
    },
    {
        name:'Рулетка',
        id: '00005',
        pic:'00005'+fileextend
    },
]
console.log(db)

for(let el of db){
    console.log(el)
    
   $('.productContainer').append(`<div id="code${el.id} " style="background-image: url(./img/${el.pic})" class="productItem name${el.name}"><div>${el.name}</div><div>${el.id}</div></div>`)

}
let clMas=[]
$('.btn__buy').html(clMas.length +'   Buy')
$('.productItem').click(function(){
    clMas.push(this.className.substr(16) +' '+this.id.substr(4) )
    hidenInp.value=clMas
$('.poup__menu').append('<div class="poup__menu__item">'+this.className.substr(16) +' --- '+this.id.substr(4)+'</div>')
$('.btn__buy').html(clMas.length +'   Buy')
    console.log(clMas)
})
let btcl=0
$('.btn__buy').click(function(){
setTimeout(function(){
    $('.poup').css('display','flex')
    $('.wrap').css('filter','blur(5px)')
},200)
    console.log('poup')

    // poup__menu.innerText=clMas
})
$('.wrap').click(function(){
    $('.poup').css('display','none')
    $('.wrap').css('filter','blur(0px)')
})


// $('.poup__menu__item').click(function(){
//     alert('dfg')
//     $(this).html('')
//     $(this).css('display','none')
// })