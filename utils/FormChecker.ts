

interface InputResponse {
    success:boolean;
    reason?:string;
    formerResponse?:boolean;
}

const Compare = (str1:string,str2:string):InputResponse => {
    return {success:str1==str2,reason:"Passwords are not equal"};
};



const CheckPassword = (pass:string):InputResponse=>{
    if(pass.length<6){
        return {success:false,reason:"Password have to be at least 6 characters"};
    }
    return {success:true}
}


const CheckEmail = (email:string):InputResponse=>{
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return {success:regexp.test(email),reason:"Not a valid email"};


}


const CheckFields=  (setResponse:(response:InputResponse)=>void,responses:Array<InputResponse>,formerResponse:InputResponse):boolean=>{
    let currentResponse:InputResponse = {success:true};

    responses.forEach(response=>{
        if(!response.success){
            if(response.reason==formerResponse.reason){
                currentResponse=response;
                return false;
            }
            currentResponse=response;

        }
       
    });
    console.log(`current repsonse:`,currentResponse);
    if(currentResponse.success!=formerResponse.success){
    setResponse(currentResponse);
    }
    return currentResponse.success;
}

export {Compare,CheckEmail,CheckPassword,CheckFields};
export type {InputResponse};