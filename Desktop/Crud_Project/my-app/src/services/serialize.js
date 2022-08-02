import serialize from 'form-serialize';

export function formSerialize(formKey){
    console.log(formKey,'first');
    let data=serialize(document.querySelector("#"+formKey));
    console.log(data,'second');
    let arrList=data.split("&");
    console.log(arrList,'third');
    let resObj={};
    arrList.forEach((item,index,arr)=>{
        let obj=item.split("=");
        console.log(obj,'fourth');
        resObj[obj[0]]=obj[1].replace('+'," ");
        console.log(resObj,'fifth');
    })
    return resObj;
}