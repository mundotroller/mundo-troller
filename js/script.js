/* Variáveis de interação */
const wppUtilityLink = document.getElementById('wpp-utility-link');
const phoneNumber = '5585988635640';

/* funções */
function handleSendMessage(message) {
    let messageDefault = 'Olá, gostaria de fazer um pedido!';
    encodedMessage = message ? encodeURIComponent(message) : encodeURIComponent(messageDefault);
    whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
}

function formatToBRL(value) {
    const number = typeof value === 'string' ? parseFloat(value.replace(/[^\d,.]/g, '').replace(',', '.')) : value;

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(number);
}

function messageGeneratorOrder(product) {
    let priceFormated = formatToBRL(product.VALOR);

    let message = "*Novo Pedido Recebido*\n\n";
    message += "Segue o resumo do seu pedido:\n";
    message += `- Código: ${product["COD. INTERNO"]}\n`;
    message += `- Produto: ${product.PEÇAS}\n`;
    message += `- Aplicação: ${product.APLICAÇÃO}\n`;
    message += `- Preço Unitário: ${priceFormated}\n`;
    message += `- Total: ${priceFormated}\n\n`;
    message += "Para confirmar seu pedido, por favor, responda com *'Confirmo'* ou envie uma mensagem para mais informações.";
    
    handleSendMessage(message);
}

/* Renderização dos produtos */
products.map((item, index) => {
    let priceFormated = formatToBRL(item.VALOR);

    let productItemHTML = `
        <div class="products_content-item">
            <img src="./assets/products/${item["COD. INTERNO"]}_1.webp" class="img-product">
            <div class="product-item-body">
                <h3>${item.PEÇAS} 
                    ${item.APLICAÇÃO}</h3>
                <div class="product-item-subtitles">
                    <p>${item["COD. INTERNO"]} | ${item.UNIDADES}</p>
                    <span class="price">${priceFormated}</span>
                </div>
                <div class="product-item-footer">
                    <button id="button-item-${index}">
                        Adicionar <img src="./assets/icons/logo-whatsapp-green.svg">
                    </button>
                </div>
            </div>
        </div>
    `

    document.querySelector(".products_content").insertAdjacentHTML("beforeend", productItemHTML);
    document.getElementById(`button-item-${index}`).addEventListener("click", (e) => {
        e.preventDefault();
        messageGeneratorOrder(item);
    })
})

/* Eventos */
wppUtilityLink.addEventListener("click", () => handleSendMessage('Olá, gostaria de fazer um pedido!'));
