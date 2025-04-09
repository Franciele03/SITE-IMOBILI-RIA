function fnIdiomaIngles(){
    document.getElementById("menu1").innerText = "Home"
    document.getElementById("menu2").innerText = "Properties"
    document.getElementById("menu3").innerText = "About Us"
    document.getElementById("menu4").innerText = "Contact"
    document.getElementById("titulo").innerText = "Find Your Dream Home"
    document.getElementById("subtitulo").innerText = "Explore our wide range of properties and find the perfect home for you."
    document.getElementById("botao1").innerText = "Search Properties"
    document.getElementById("botao2").innerText = "Learn More"
    document.getElementById("contato").innerText = "Get in touch with us today!"
    document.getElementById("entre").innerText = "Contact Us"
    document.getElementById("fone").innerText = "Phone"
    document.getElementById("local").innerText = "Office"
    document.getElementById("assinatura").innerText = "Subscribe to our newsletter for the latest updates on new features and product releases."
    document.getElementById("cadastro").innerText = "Subscribe"
    document.getElementById("direitos").innerText = "© 2025 Guto Xavier. All rights reserved."
}  
 
function fnIdiomaPortugues(){
    document.getElementById("menu1").innerText = "Inicial"
    document.getElementById("menu2").innerText = "Imóveis"
    document.getElementById("menu3").innerText = "Sobre nós"
    document.getElementById("menu4").innerText = "Contato"
    document.getElementById("titulo").innerText = "Encontre a casa dos seus sonhos"
    document.getElementById("subtitulo").innerText = "Explore nossa ampla variedade de imóveis e encontre a casa perfeita para você."
    document.getElementById("botao1").innerText = "Pesquise Imóveis"
    document.getElementById("botao2").innerText = "Saiba Mais"
    document.getElementById("contato").innerText = "Entre em contato conosco hoje mesmo!"
    document.getElementById("entre").innerText = "Entre em contato"
    document.getElementById("fone").innerText = "Telefone"
    document.getElementById("local").innerText = "Escritório"
    document.getElementById("cadastro").innerText = "Assine nossa newsletter para receber as últimas atualizações sobre novos recursos e lançamentos de produtos."
    document.getElementById("cadastro").innerText = "Cadastrar"
    document,getElementById("direitos").innerText = "© 2025 Guto Xavier. Todos os direitos reservados."
}
 
function fnBaner1(){
    document.getElementById("baner").src="images/banner01.jpg"
}
 
function fnBaner2(){
    document.getElementById("baner").src="images/banner02.jpg"
}
 
function fnBaner3(){
    document.getElementById("baner").src="images/banner03.jpg"
}
 
function fnBaner4(){
    document.getElementById("baner").src="images/banner04.jpg"
}
 
function cadastrarEmail() {
    // Pega o valor digitado no campo de email
    const email = document.getElementById('email-input').value;
 
    // Verifica se o campo de email não está vazio
    if (email) {
        // Exibe a mensagem de sucesso com o email
        alert(`Seu email ${email} foi cadastrado com sucesso`);
 
        // Limpa o campo de email após o cadastro
        document.getElementById('email-input').value = '';
    } else {
        // Caso o campo esteja vazio, exibe um alerta pedindo para preencher o email
        alert('Por favor, insira um e-mail válido');
    }
}
 