/*
as 3 linhas a baixo são variaveis que fazem conexão direta na pag ao qual defini os Id !!!
*/
let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
nomeOk = false
emailOk = false
assuntoOk = false

/*
as 3 linhas a baixo definem um tamanho ao espaço de texto !!!
*/
nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width =  "100%"

/*
Funções !!!
*/

function validaNome()
{
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length <3)
    {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    }
    else
    {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "chartreuse"
        nomeOk = true
    }

}
function validaEmail()
{
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 )
    {
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "red"
    }
    else
    {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color =  "chartreuse"
        emailOk = true
    }
}

function validaAssunto()
{
   let txtAssunto = document.querySelector('#txtAssunto')
   if(assunto.value.length > 20)
   {
       txtAssunto.innerHTML = "Você atingiu o limite MAX de caracters !!!"
       txtAssunto.style.color = "red"
       txtAssunto.style.display = 'block'
      

   }
    else
    {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
    
   
    
}
function enviarFormulario()
{
    if(nomeOk == true && emailOk == true && assuntoOk == true)
    {
        alert ("Formulário enviado !!!")
    }
    else
    {
        alert ( "Ops, verifique se os campos estão preenchidos corretamente !!!" )
    }
}
function mapaZoom ()
{
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}
function mapaNormal()
{
    mapa.style.width = '500'
    mapa.style.height = '300'
}