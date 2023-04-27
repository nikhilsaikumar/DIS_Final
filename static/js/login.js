emailcheck = (e) =>
{
    let email = e.target.value
    let ne = document.getElementById('ne')
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    {   
        e.target.classList.remove('is-invalid')
        ne.classList.remove('invalid-feedback')
        e.target.classList.add('is-valid')
        ne.classList.add('valid-feedback')
        ne.innerText="Looks good"
        
    }else if(email==""){
        e.target.classList.remove('is-valid')
        ne.classList.remove('valid-feedback')
        e.target.classList.add('is-invalid')
        ne.classList.add('invalid-feedback')
        ne.innerText="Please Provide Valid email"
    }
} 
emailcheckclick = (e) =>
{
    let email = e.target.value
    let ne = document.getElementById('ne')
    if(email=="")
    {   
  
        e.target.classList.remove('is-valid')
        ne.classList.remove('valid-feedback')
        e.target.classList.add('is-invalid')
        ne.classList.add('invalid-feedback')
        ne.innerText="Please Provide Valid email"
        
    }else{
        emailcheck(e)
    }
}
Passwordcheck = (e) =>
{

    let Password = e.target.value
    let pe = document.getElementById('pe')
    if(Password=="")
    {   
        e.target.classList.remove('is-valid')
        pe.classList.remove('valid-feedback')
        e.target.classList.add('is-invalid')
        pe.classList.add('invalid-feedback')
        pe.innerText="Password Is Required"
        
    }else if(Password.length < 6){

        pe.innerText="The password must contain at least 6 characters."
        
}else{
        e.target.classList.remove('is-invalid')
        pe.classList.remove('invalid-feedback')
        e.target.classList.add('is-valid')
        pe.classList.add('valid-feedback')
        pe.innerText="Looks good"
    }
}