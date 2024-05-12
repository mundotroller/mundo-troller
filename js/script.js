/* Variáveis de interação */
const wppUtilityLink = document.getElementById('wpp-utility-link');
const inputProducts = document.getElementById('input-products');
const phoneNumber = '5585988635640';

/* funções */
function handleSendMessage(message) {
    let messageDefault = 'Olá, gostaria de fazer um pedido!';
    encodedMessage = message ? encodeURIComponent(message) : encodeURIComponent(messageDefault);
    whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
}

function filter() {
    let input, filter, productsContent, product, h3, i, textValue, span, produtcNotFound, count = 0;

    input = document.getElementById("input-products");
    productsContent = document.getElementById("products_content");
    filter = input.value.toUpperCase();
    product = productsContent.getElementsByTagName("li");
    produtcNotFound = document.getElementById('productNotFound');

    for (i = 0; i < product.length; i++) {
        h3 = product[i].getElementsByTagName("h3")[0];
        textValue = h3.textContent || h3.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            product[i].style.display = "";
            count++
        } else {
            product[i].style.display = "none";
        }
    }

    if (count === 0) {
        const productNotFoundH2 = produtcNotFound.getElementsByTagName("h2")[0];
        productsContent.style.display = "none";
        produtcNotFound.classList.add('active');
        productNotFoundH2.textContent = `Sua busca por "${input.value}" não encontrou resultado algum :(`
    } else {
        productsContent.style.display = "grid";
        produtcNotFound.classList.remove('active');
    }
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
        <li class="products_content-item" id="prodcut-item-${index}">
            <img src="./assets/products/${item["COD. INTERNO"]}_1.webp" class="img-product">
            <div class="product-item-body">
                <h3 class="product-item-name">${item.PEÇAS} 
                    ${item.APLICAÇÃO}</h3>
                <div class="product-item-subtitles">
                    <p>${item["COD. INTERNO"]} | ${item.UNIDADES}</p>
                    <span class="price">${priceFormated}</span>
                </div>
                <div class="product-item-footer" id="productNotFuound">
                    <button id="button-item-${index}">
                        Adicionar <img src="./assets/icons/logo-whatsapp-green.svg">
                    </button>
                </div>
            </div>
        </li>
    `

    document.querySelector(".products_content").insertAdjacentHTML("beforeend", productItemHTML);
    document.getElementById(`button-item-${index}`).addEventListener("click", (e) => {
        e.preventDefault();
        messageGeneratorOrder(item);
    })
})

/* Eventos */
wppUtilityLink.addEventListener("click", () => handleSendMessage('Olá, gostaria de fazer um pedido!'));