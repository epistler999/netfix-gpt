export const validateForm = (email="",password="")=>{
    let bool1 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    let bool2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password);
    if(!bool1){
        return "Email is not valid.";
    }
    else if(!bool2){
        return "Password is not valid.";
    }

    return null;
};
