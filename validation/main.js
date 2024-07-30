document.addEventListener("DOMContentLoaded", ()=>{
    let
        formForm = document.getElementById("formForm"),
        formName = document.getElementById("formName"),
        formEmail = document.getElementById("formEmail"),
        formPassword = document.getElementById("formPassword"),
        formSubmit = document.getElementById("formSubmit");



        function validateName(elem){
            if(elem.value.length > 20){
                console.log("invalid name")
                elem.setCustomValidity("Имя слишком длинное");
                elem.reportValidity();
                return false;
            }else{
                console.log("valid name")
                elem.setCustomValidity("");
                return true;
            }
        };
        
        function validateEmail(elem){
            let    
                emailRegExp = new RegExp('([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)');
            if(emailRegExp.test(elem.value)){
                console.log("validEmail");
                formEmail.setCustomValidity('');
                elem.reportValidity();
                return true;
            }else{
                console.log("invalidEmail");
                formEmail.setCustomValidity("Не корректный Email");
                elem.reportValidity();
                return false;
            }
        };

        function validatePassword(elem){
            console.log("valPass");
            let
                passwordRegExp = new RegExp('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})');
            if(passwordRegExp.test(elem.value)){
                console.log("valid password");
                formPassword.setCustomValidity('');
                elem.reportValidity();
                return true;
            }else{
                console.log("invalid password");
                formPassword.setCustomValidity("Пароль должен содердать цифры, заглвные и прописные буквы и быть длинее 6-ти символов");
                elem.reportValidity();
                return false;
            }
        };



        formSubmit.addEventListener("click", (event)=>{

            event.preventDefault();
            validateName(formName);
            validateEmail(formEmail);
            validatePassword(formPassword);
            if(validateName(formName) && validateEmail(formEmail) && validatePassword(formPassword)){
                formForm.submit();
            }  
        });

});