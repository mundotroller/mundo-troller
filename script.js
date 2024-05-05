/* Variáveis de interação */
const orderButtonWpp = document.getElementById('btn-action-wpp');
const wppUtilityLink = document.getElementById('wpp-utility-link');

/* Variáveis de internas */
const phoneNumber = '5585988635640';
const message = 'Olá, gostaria de fazer um pedido!'
const encodedMessage = encodeURIComponent(message);
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

/* funções */
function handleSendMessage(event) {
    window.open(whatsappLink)
}

/* Eventos */
orderButtonWpp.addEventListener("click", handleSendMessage);
wppUtilityLink.addEventListener("click", handleSendMessage);
