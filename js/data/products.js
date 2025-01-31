let products = [
  {
    "COD. INTERNO": "MT0056",
    PEÇAS: "5 VÁLVULA PISTÃO ÓLEO MOTOR JET COOLER ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 JG",
    VALOR: "750",
  },
  {
    "COD. INTERNO": "MT0096",
    PEÇAS: "ACABAMENTO DA PLACA DIANTEIRA",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "400,00",
  },
  {
    "COD. INTERNO": "MT0095",
    PEÇAS: "ACABAMENTO DA PLACA TRASEIRA",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "490,00",
  },
  {
    "COD. INTERNO": "MT0005",
    PEÇAS: "ACABAMENTO DO BANCO (PAR)",
    APLICAÇÃO: "TROLLER 06/14",
    UNIDADES: "01 PAR",
    VALOR: "170",
  },
  /* Excluido - 17/05/2024 (a pedido do cliente)
  {
    "COD. INTERNO": "MT0030",
    PEÇAS: "ALAVANCA / PUXADOR DO CAPO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "10 UNID",
    VALOR: "92.99",
  },
  */
  {
    "COD. INTERNO": "MT0032",
    PEÇAS: "ALAVANCA DO CAMBIO AUTOMÁTICO ORIGINAL",
    APLICAÇÃO: "TROLLER 16/21",
    UNIDADES: "01 UNID",
    VALOR: "2600",
  },
  {
    "COD. INTERNO": "MT0088",
    PEÇAS: "ALÇA DO TETO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "210,00",
  },
  {
    "COD. INTERNO": "MT0027",
    PEÇAS: "BARRA PANHARD C/ BUCHA",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: 2200,
  },
  {
    "COD. INTERNO": "MT0011",
    PEÇAS: "BATENTE DO CAPÔ",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "13",
  },
  {
    "COD. INTERNO": "MT0004",
    PEÇAS: "BOMBA DA CAIXA DE TRANSFERÊNCIA 4X4 ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "500",
  },
  {
    "COD. INTERNO": "MT0048",
    PEÇAS: "BOMBA DA DIREÇÃO HIDRÁULICA ORIGINAL",
    APLICAÇÃO: "TROLLER 06/11",
    UNIDADES: "01 UNID",
    VALOR: "900",
  },
  {
    "COD. INTERNO": "MT0049",
    PEÇAS: "BOMBA DA DIREÇÃO HIDRÁULICA ORIGINAL",
    APLICAÇÃO: "TROLLER 02/05",
    UNIDADES: "01 UNID",
    VALOR: "4600",
  },
  {
    "COD. INTERNO": "MT0041",
    PEÇAS: "BOMBA DE COMBUSTÍVEL ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "2700",
  },
  {
    "COD. INTERNO": "MT0054",
    PEÇAS: "BOMBA DE VÁCUO ORIGINAL",
    APLICAÇÃO: "TROLLER 06/11",
    UNIDADES: "01 UNID",
    VALOR: "890",
  },
  {
    "COD. INTERNO": "MT0006",
    PEÇAS: "BORRACHA DO BRAÇO TENSOR",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "30",
  },
  {
    "COD. INTERNO": "MT0026",
    PEÇAS: "BORRACHA DO PEDAL FREIO EMBREAGEM",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "25",
  },
  {
    "COD. INTERNO": "MT0028",
    PEÇAS: "BORRACHA DO PEDAL FREIO EMBREAGEM",
    APLICAÇÃO: "TROLLER 01/14",
    UNIDADES: "01 UNID",
    VALOR: "25",
  },
  {
    "COD. INTERNO": "MT0066",
    PEÇAS: "BOTÃO DUPLO DO VIDRO LADO ESQUERDO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "550",
  },
  {
    "COD. INTERNO": "MT0014",
    PEÇAS: "BRACO PITMAN (CURVO) ORIGINAL",
    APLICAÇÃO: "TROLLER ../02",
    UNIDADES: "01 UNID",
    VALOR: "299",
  },
  {
    "COD. INTERNO": "MT0013",
    PEÇAS: "BRAÇO PITMAN (RETRÔ) ORIGINAL",
    APLICAÇÃO: "TROLLER 03/14",
    UNIDADES: "01 UNID",
    VALOR: "290",
  },
  {
    "COD. INTERNO": "MT0016",
    PEÇAS: "BUCHA DA MANGA DE EIXO DIANTEIRA",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "45",
  },
  {
    "COD. INTERNO": "MT0060",
    PEÇAS: "CAIXA DO FILTRO DE AR ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "1500",
  },
  {
    "COD. INTERNO": "MT0058",
    PEÇAS: "CALOTA CENTRO RODA PRETO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "45",
  },
  {
    "COD. INTERNO": "MT0081",
    PEÇAS: "CAMERA DE RÉ ORIGINAL",
    APLICAÇÃO: "TROLLER TX4",
    UNIDADES: "01 UNID",
    VALOR: "590,00",
  },
  {
    "COD. INTERNO": "MT0083",
    PEÇAS: "CAPA COIFA DO FREIO DE MÃO COM BASE ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "159,00",
  },
  {
    "COD. INTERNO": "MT0037",
    PEÇAS: "CARCAÇA DA VÁLVULA TERMOSTÁTICA",
    APLICAÇÃO: "TROLLER 06/11",
    UNIDADES: "01 UNID",
    VALOR: "1100",
  },
  {
    "COD. INTERNO": "MT0025",
    PEÇAS: "CARDAN DIANTEIRO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "7500",
  },
  {
    "COD. INTERNO": "MT0036",
    PEÇAS: "CARDAN DIANTEIRO ORIGINAL",
    APLICAÇÃO: "TROLLER 06/14",
    UNIDADES: "01 UNID",
    VALOR: "4000",
  },
  {
    "COD. INTERNO": "MT0035",
    PEÇAS: "COMANDO PAINEL DO AR CONDICIONADO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "2000",
  },
  {
    "COD. INTERNO": "MT0073",
    PEÇAS: "COMUTADOR BOTÃO DO 4X4 ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "789,00",
  },
  {
    "COD. INTERNO": "MT0007",
    PEÇAS: "CONJ. ADAPTADOR FRONTAL CAIXA TRANSFERÊNCIA 4X4 ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "1300",
  },
  {
    "COD. INTERNO": "MT0040",
    PEÇAS: "CONJ. FILTRO DE COMBUSTIVEL COMPLETO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "1200",
  },
  {
    "COD. INTERNO": "MT0021",
    PEÇAS: "CONJ. PLANETÁRIA CAIXA TRANSFERÊNCIA 4X4 ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "1679",
  },
  {
    "COD. INTERNO": "MT0082",
    PEÇAS: "CONSOLE MOLDURA DO TETO SEM LANTERNA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "405",
  },
  {
    "COD. INTERNO": "MT0008",
    PEÇAS: "CREMALHEIRA CAIXA TRANSFERÊNCIA 4X4 ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "499",
  },
  {
    "COD. INTERNO": "MT0001",
    PEÇAS: "CUBO DE RODA MONTADO",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "398",
  },
  {
    "COD. INTERNO": "MT0065",
    PEÇAS: "DOBRADIÇA DA PORTA DIANTEIRA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "250",
  },
  // {
  //  "COD. INTERNO": "MT0010",
  //  "PEÇAS": "DOBRADIÇAS DA TAMPA VIDRO TRASEIRO",
  //  "APLICAÇÃO": "TROLLER 02\/08",
  //  "UNIDADES": "04 UNID",
  //  "VALOR": "360"
  // },
  {
    "COD. INTERNO": "MT0097",
    PEÇAS: "FECHO DO PORTA LUVAS ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "49,89",
  },
  {
    "COD. INTERNO": "MT0052",
    PEÇAS: "GRADE DIANTEIRA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "550",
  },
  {
    "COD. INTERNO": "MT0074",
    PEÇAS: "INTERRUPTOR BOTÃO BLOQUEIO DIFERENCIAL ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "490",
  },
  {
    "COD. INTERNO": "MT0085",
    PEÇAS: "INTERRUPTOR BOTAO DE TRAÇÃO 4X4 ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "739,99",
  },
  {
    "COD. INTERNO": "MT0067",
    PEÇAS: "INTERRUPTOR LUZ DE FREIO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "99",
  },
  {
    "COD. INTERNO": "MT0029",
    PEÇAS: "INTERRUPTOR TRAVA PORTAS CENTRAL ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "319",
  },
  {
    "COD. INTERNO": "MT0068",
    PEÇAS: "JG 05 BORRACHA ACABAMENTO PARAFUSO ESTEPE E CINTO",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 KIT",
    VALOR: "26",
  },
  {
    "COD. INTERNO": "MT0019",
    PEÇAS: "KIT ACENDEDOR 12V ORIGINAL",
    APLICAÇÃO: "TROLLER 14/21",
    UNIDADES: "01 KIT",
    VALOR: "240",
  },
  {
    "COD. INTERNO": "MT0071",
    PEÇAS: "KIT CHAVE CILINDRO CANIVETE ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 KIT",
    VALOR: "759,00",
  },
  {
    "COD. INTERNO": "MT0022",
    PEÇAS: "KIT COROA PINHÃO 11X45 ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 KIT",
    VALOR: "1600",
  },
  {
    "COD. INTERNO": "MT0009",
    PEÇAS: "KIT CORRENTE CAIXA TRANSFERÊNCIA 4X4",
    APLICAÇÃO: "TROLLER 00/14 | PARALELO",
    UNIDADES: "01 KIT",
    VALOR: "1400",
  },
  {
    "COD. INTERNO": "MT0034",
    PEÇAS: "KIT ESPAÇADOR PINHÃO DIFERENCIAL DIANT. / TRAS. ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 KIT",
    VALOR: "200",
  },
  {
    "COD. INTERNO": "MT0043",
    PEÇAS: "KIT PARAFUSO TAMPA CAIXA FUSÍVEL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 KIT",
    VALOR: "190",
  },
  {
    "COD. INTERNO": "MT0093",
    PEÇAS: "KIT REPARO DA CX SATELITE DIANTEIRO ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 KIT",
    VALOR: "600,00",
  },
  {
    "COD. INTERNO": "MT0094",
    PEÇAS: "KIT REPARO DA CX SATELITE ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 KIT",
    VALOR: "1550,00",
  },
  {
    "COD. INTERNO": "MT0084",
    PEÇAS: "KIT REPARO DOBRADICAS DO PORTA LUVAS",
    APLICAÇÃO: "TROLLER 15/21 | PARALELO",
    UNIDADES: "01 KIT",
    VALOR: "99,00",
  },
  {
    "COD. INTERNO": "MT0017",
    PEÇAS: "LANTERNA DO PISCA DIREITO ORIGINAL",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID [ESGOTADO]",
    VALOR: "479",
    ESGOTADO: true,
  },
  {
    "COD. INTERNO": "MT0077",
    PEÇAS: "LANTERNA DO PISCA DIREITO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "539,99",
  },
  {
    "COD. INTERNO": "MT0018",
    PEÇAS: "LANTERNA DO PISCA ESQUERDO ORIGINAL",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "490",
  },
  {
    "COD. INTERNO": "MT0078",
    PEÇAS: "LANTERNA DO PISCA ESQUERDO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "549,99",
  },
  {
    "COD. INTERNO": "MT0069",
    PEÇAS: "LANTERNA LATERAL DO PISCA ORIGINAL",
    APLICAÇÃO: "TROLLER 09/21",
    UNIDADES: "01 UNID",
    VALOR: "199",
  },
  {
    "COD. INTERNO": "MT0064",
    PEÇAS: "LIMITADOR DA PORTA DIANTEIRA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "159,00",
  },
  {
    "COD. INTERNO": "MT0055",
    PEÇAS: "MAÇANETA EXTRENA DA PORTA DIREITA",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "160",
  },
  {
    "COD. INTERNO": "MT0087",
    PEÇAS: "MAÇANETA PUXADOR DO CAPO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "110,00",
  },
  {
    "COD. INTERNO": "MT0002",
    PEÇAS: "MANGA DE EIXO DIANTEIRA",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "480",
  },
  {
    "COD. INTERNO": "MT0003",
    PEÇAS: "MANGA DE EIXO TRASEIRA",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "390",
  },
  {
    "COD. INTERNO": "MT0023",
    PEÇAS: "MANGUEIRA DO DUTO DE AR",
    APLICAÇÃO: "TROLLER 06/11",
    UNIDADES: "01 UNID",
    VALOR: "135",
  },
  {
    "COD. INTERNO": "MT0098",
    PEÇAS: "MANGUEIRA INFERIOR DO RADIADOR ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "439",
  },
  {
    "COD. INTERNO": "MT0080",
    PEÇAS: "MANOPLA COIFA COM PLAQUETA DA ALAVANCA MARCHA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "499,00",
  },
  {
    "COD. INTERNO": "MT0091",
    PEÇAS: "MAQUINA DE VIDRO DIREITO ORIGINAL",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "1250",
  },
  {
    "COD. INTERNO": "MT0090",
    PEÇAS: "MAQUINA DE VIDRO ESQUERDO ORIGINAL",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "1250",
  },
  {
    "COD. INTERNO": "MT0092",
    PEÇAS: "MAQUINA DE VIDRO ESQUERDO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "1900,00",
  },
  {
    "COD. INTERNO": "MT0042",
    PEÇAS: "MECANISMO DO LIMPADOR PARA-BRISA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "2850",
  },
  {
    "COD. INTERNO": "MT0033",
    PEÇAS: "MODULO BCM ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "4000",
  },
  {
    "COD. INTERNO": "MT0059",
    PEÇAS: "MOLDURA DO PAINEL CENTRAL ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "460",
  },
  /* Exclusao dia 17/05 a pedido do cliente
  {
    "COD. INTERNO": "MT0086",
    PEÇAS: "MOLDURA PAINEL CENTER STACK ORIGINAL",
    APLICAÇÃO: "TROLLER 15/19",
    UNIDADES: "01 UNID",
    VALOR: "479,00",
  },
  */
  {
    "COD. INTERNO": "MT0099",
    PEÇAS: "MOTOR ATUADOR ELÉTRICO DO AR CONDICIONADO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "139,00",
  },
  {
    "COD. INTERNO": "MT0044",
    PEÇAS: "MUNHÃO MONTANTE ARTICULAÇÃO DIREÇÃO DIREITO",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "1900",
  },
  {
    "COD. INTERNO": "MT0046",
    PEÇAS: "MUNHÃO MONTANTE ARTICULAÇÃO DIREÇÃO DIREITO",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "1100",
  },
  {
    "COD. INTERNO": "MT0045",
    PEÇAS: "MUNHÃO MONTANTE ARTICULAÇÃO DIREÇÃO ESQUERDO",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "1900",
  },
  {
    "COD. INTERNO": "MT0047",
    PEÇAS: "MUNHÃO MONTANTE ARTICULAÇÃO DIREÇÃO ESQUERDO",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "1100",
  },
  {
    "COD. INTERNO": "MT0053",
    PEÇAS: "PAR DE PINÇAS FREIO TRASEIRO ORIGINAL",
    APLICAÇÃO: "TROLLER 01/21",
    UNIDADES: "01 PAR",
    VALOR: "4200",
  },
  {
    "COD. INTERNO": "MT0089",
    PEÇAS: "RESISTÊNCIA DO AR CONDICIONADO",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "190,00",
  },
  {
    "COD. INTERNO": "MT0079",
    PEÇAS: "RESISTÊNCIA DO AR CONDICIONADO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "699,00",
  },
  {
    "COD. INTERNO": "MT0070",
    PEÇAS: "SENSOR DE FASE ORIGINAL",
    APLICAÇÃO: "TROLLER 06/11",
    UNIDADES: "01 UNID",
    VALOR: "450",
  },
  {
    "COD. INTERNO": "MT0075",
    PEÇAS: "SENSOR DE ROTAÇÃO ORIGINAL",
    APLICAÇÃO: "TROLLER 06/11",
    UNIDADES: "01 UNID",
    VALOR: "399,00",
  },
  {
    "COD. INTERNO": "MT0031",
    PEÇAS: "SENSOR DO ABS DIANTEIRO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "799",
  },
  {
    "COD. INTERNO": "MT0038",
    PEÇAS: "SENSOR DO FLUXO DE AR ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "390",
  },
  {
    "COD. INTERNO": "MT0076",
    PEÇAS: "SENSOR MAP PRESSAO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "400,00",
  },
  {
    "COD. INTERNO": "MT0072",
    PEÇAS: "SENSOR PIRULITO TRANSMISSÃO 4X4 ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "405",
  },
  {
    "COD. INTERNO": "MT0057",
    PEÇAS: "SENSOR ROTAÇÃO COMANDO VALVULAS ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "410",
  },
  {
    "COD. INTERNO": "MT0063",
    PEÇAS: "SENSOR TEMPERATURA GASES ESCAPE AZUL ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "460",
  },
  {
    "COD. INTERNO": "MT0062",
    PEÇAS: "SENSOR TEMPERATURA GASES ESCAPE PRETO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "460",
  },
  {
    "COD. INTERNO": "MT0061",
    PEÇAS: "SENSOR TEMPERATURA GASES ESCAPE VERDE ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "580",
  },
  {
    "COD. INTERNO": "MT0020",
    PEÇAS: "TAMPA DO ACENDEDOR 12V ORIGINAL",
    APLICAÇÃO: "TROLLER 14/21",
    UNIDADES: "01 UNID",
    VALOR: "70",
  },
  {
    "COD. INTERNO": "MT0012",
    PEÇAS: "TAMPÃO DO ASSOALHO TODOS",
    APLICAÇÃO: "TROLLER 02/21",
    UNIDADES: "01 UNID",
    VALOR: "15",
  },
  {
    "COD. INTERNO": "MT0100",
    PEÇAS: "TENSOR ESTICADOR CORREIA POLY-V ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "R$ 543,00",
  },
  {
    "COD. INTERNO": "MT0039",
    PEÇAS: "TRAMBULADOR ALAVANCA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "5800",
  },
  {
    "COD. INTERNO": "MT0015",
    PEÇAS: "UNHA / GANCHO ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "199",
  },
  {
    "COD. INTERNO": "MT0051",
    PEÇAS: "VÁLVULA DE AR QUENTE ORIGINAL",
    APLICAÇÃO: "TROLLER 06/11",
    UNIDADES: "01 UNID",
    VALOR: "490",
  },
  {
    "COD. INTERNO": "MT0050",
    PEÇAS: "VÁLVULA DO SISTEMA DE ARREFECIMENTO ORIGINAL",
    APLICAÇÃO: "TROLLER 06/11",
    UNIDADES: "01 UNID",
    VALOR: "99",
  },
  {
    "COD. INTERNO": "MT0024",
    PEÇAS: "VOLANTE DO MOTOR ORIGINAL",
    APLICAÇÃO: "TROLLER 06/11",
    UNIDADES: "01 UNID",
    VALOR: "5499",
  },
  {
    "COD. INTERNO": "MT0101",
    PEÇAS: "TAMPA DO TANQUE COMBUSTIVEL ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "129,00",
  },
  {
    "COD. INTERNO": "MT0102",
    PEÇAS: "ALAVANCA TECLA DE ACIONAMENTO DO ENCOSTO DIREITO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "90,00",
  },
  {
    "COD. INTERNO": "MT0103",
    PEÇAS: "ALAVANCA TECLA DE ACIONAMENTO DO ENCOSTO ESQUERDO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "90,00",
  },
  {
    "COD. INTERNO": "MT0104",
    PEÇAS: "AMORTECEDOR DA TAMPA TRASEIRA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "195",
  },
  {
    "COD. INTERNO": "MT0105",
    PEÇAS: "CAIXA DE REDUÇÃO TRAÇÃO 4X4",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "8000,00",
  },
  {
    "COD. INTERNO": "MT0106",
    PEÇAS: "CAIXA SATÉLITE DIANTEIRA COMPLETA ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "1600,00",
  },
  // Att daqui
  {
    "COD. INTERNO": "MT0107",
    PEÇAS: "MARCADOR DE COMBUSTÍVEL ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "699",
  },
  {
    "COD. INTERNO": "MT0108",
    PEÇAS: "CAIXA DE DIREÇÃO ORIGINAL",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "5500.00",
  },
  {
    "COD. INTERNO": "MT0109",
    PEÇAS: "BORRACHA DO DUTO DE FILTRO DE AR",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "90,00",
  },
  {
    "COD. INTERNO": "MT0110",
    PEÇAS: "CAIXA DE AR ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "3400,00",
  },
  {
    "COD. INTERNO": "MT0111",
    PEÇAS: "TUBO DE COMBUSTÍVEL ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "199,00",
  },
  {
    "COD. INTERNO": "MT0112",
    PEÇAS: "PEDAL ELÉTRICO ORIGINAL",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "950,00",
  },
  {
    "COD. INTERNO": "MT0113",
    PEÇAS: "GRANDE FRONTAL EM FIBRA",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "580,00",
  },
  {
    "COD. INTERNO": "MT0114",
    PEÇAS: "COIFA DA ALAVANCA MANUAL ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "500,00",
  },
  {
    "COD. INTERNO": "MT0115",
    PEÇAS: "PAR DE FAROL",
    APLICAÇÃO: "TROLLER 01/04",
    UNIDADES: "01 PAR",
    VALOR: "600,00",
  },
  {
    "COD. INTERNO": "MT0116",
    PEÇAS: "ALAVANCA DE CÂMBIO MANUAL",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "1100,00",
  },
  {
    "COD. INTERNO": "MT0117",
    PEÇAS: "RETROVISOR LADO ESQUERDO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "1490 ",
  },
  {
    "COD. INTERNO": "MT0118",
    PEÇAS: "RETROVISOR LADO DIREITO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "1490",
  },
  {
    "COD. INTERNO": "MT0119",
    PEÇAS: "DESCANSO DE BRAÇO LADO DIREITO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "300",
  },
  {
    "COD. INTERNO": "MT0120",
    PEÇAS: "DESCANSO DE BRAÇO LADO ESQUERDO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "300",
  },
  {
    "COD. INTERNO": "MT0121",
    PEÇAS: "BOTÃO DA BUZINA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "1100",
  },
  {
    "COD. INTERNO": "MT0122",
    PEÇAS: "KIT ROLAMENTO RETENTOR COROA PIÃO CX. DE SATÉLITE",
    APLICAÇÃO: "",
    UNIDADES: "01 KIT",
    VALOR: "590",
  },
  {
    "COD. INTERNO": "MT0123",
    PEÇAS: "ADESIVO COLUNA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "65",
  },
  {
    "COD. INTERNO": "MT0124",
    PEÇAS: "ADESIVO 4X4 ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "80",
  },
  {
    "COD. INTERNO": "MT0125",
    PEÇAS: "ADESIVO BANDEIRA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "65",
  },
  {
    "COD. INTERNO": "MT0126",
    PEÇAS: "ADESIVO T4 DA TAMPA TRASEIRA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "75",
  },
  {
    "COD. INTERNO": "MT0127",
    PEÇAS: "ADESIVO 3.2 DA TAMPA TRASEIRA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "65",
  },
  {
    "COD. INTERNO": "MT0128",
    PEÇAS: "LANTERNA TRASEIRA SEM GRADE ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "1300",
  },
  {
    "COD. INTERNO": "MT0129",
    PEÇAS: "GRADE DA LANTERNA TRASEIRA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "300",
  },
  {
    "COD. INTERNO": "MT0130",
    PEÇAS: "BRUCUTU TROLLER",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "120",
  },
  {
    "COD. INTERNO": "MT0131",
    PEÇAS: "BRUCUTU TROLLER ORIGINAL",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "112",
  },
  {
    "COD. INTERNO": "MT0132",
    PEÇAS: "DIFUSOR PARA-BRISA ORIGINAL",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "49",
  },
  {
    "COD. INTERNO": "MT0133",
    PEÇAS: "MÓDULO VIDRO ELÉTRICO ORIGINAL",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "245",
  },
  {
    "COD. INTERNO": "MT0134",
    PEÇAS: "KIT BUCHA DOBRADIÇA VIDRO TRASEIRO",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 KIT",
    VALOR: "60",
  },
  {
    "COD. INTERNO": "MT0135",
    PEÇAS: "KIT ARREFECIMENTO ORIGINAL",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 KIT",
    VALOR: "360",
  },
  {
    "COD. INTERNO": "MT0136",
    PEÇAS: "PAINEL ORIGINAL",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "3500",
  },
  {
    "COD. INTERNO": "MT0137",
    PEÇAS: "RADIADOR ORIGINAL TROLLER 3.0",
    APLICAÇÃO: "TROLLER 06/11",
    UNIDADES: "01 UNID",
    VALOR: "5400",
  },
  {
    "COD. INTERNO": "MT0138",
    PEÇAS: "TUBO CILINDRO DE EMBREAGEM ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "1390",
  },
  {
    "COD. INTERNO": "MT0139",
    PEÇAS: "VOLANTE DE DIREÇÃO ORIGINAL",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "1450",
  },
  {
    "COD. INTERNO": "MT0140",
    PEÇAS: "KIT 06 PORCAS DE RODA ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 KIT",
    VALOR: "110",
  },
  {
    "COD. INTERNO": "MT0141",
    PEÇAS: "PRESILHA DO TETO COR BEGE",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "29",
  },
  {
    "COD. INTERNO": "MT0142",
    PEÇAS: "PAINEL DE INSTRUMENTO ORIGINAL",
    APLICAÇÃO: "TROLLER 09/12",
    UNIDADES: "01 UNID",
    VALOR: "1490",
  },
  {
    "COD. INTERNO": "MT0143",
    PEÇAS: "BUCHA PARA BIELETA ESTABILIZADOR",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "59",
  },
  {
    "COD. INTERNO": "MT0144",
    PEÇAS: "DEFLETOR DA TURBINA ORIGINAL TROLLER 2.8",
    APLICAÇÃO: "TROLLER 02/05",
    UNIDADES: "01 UNID",
    VALOR: "450",
  },
  {
    "COD. INTERNO": "MT0145",
    PEÇAS: "KIT TRAVA PONTA DE EIXO",
    APLICAÇÃO: "",
    UNIDADES: "01 KIT",
    VALOR: "75",
  },
  {
    "COD. INTERNO": "MT0146",
    PEÇAS: "SERVO FREIO ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "1250",
  },
  {
    "COD. INTERNO": "MT0147",
    PEÇAS: "DIFUSOR DE AR CENTRAL ORIGINAL",
    APLICAÇÃO: "TROLLER 09/21",
    UNIDADES: "01 UNID",
    VALOR: "165",
  },
  {
    "COD. INTERNO": "MT0148",
    PEÇAS: "GRADE DIFUSOR DE AR CABINE ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "165",
  },
  {
    "COD. INTERNO": "MT0149",
    PEÇAS: "CILINDRO MESTRE DE FREIO ORIGINAL",
    APLICAÇÃO: "TROLLER 02/14",
    UNIDADES: "01 UNID",
    VALOR: "490",
  },
  {
    "COD. INTERNO": "MT0150",
    PEÇAS: "COXIM DO CAMBIO",
    APLICAÇÃO: "TROLLER 06/14",
    UNIDADES: "01 UNID",
    VALOR: "130",
  },
  {
    "COD. INTERNO": "MT0151",
    PEÇAS: "VÁLVULA EQUALIZADOR DE FREIO TRASEIRO ORIGINAL",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "485",
  },
  {
    "COD. INTERNO": "MT0152",
    PEÇAS: "ADESIVO CAPO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "155",
  },
  {
    "COD. INTERNO": "MT0153",
    PEÇAS: "FILTRO INTERNO DO MOTOR 3.2 5 CILINDROS ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "135",
  },
  {
    "COD. INTERNO": "MT0154",
    PEÇAS: "COXIM CAMBIO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "890",
  },
  {
    "COD. INTERNO": "MT0155",
    PEÇAS: "REGULADOR DO CAPO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "86",
  },
  {
    "COD. INTERNO": "MT0156",
    PEÇAS: "VÁLVULA DE EXPANSÃO DO AR CONDICIONADO ORIGINAL",
    APLICAÇÃO: "TROLLER 15/21",
    UNIDADES: "01 UNID",
    VALOR: "390",
  },
  // att 17.07
  {
    "COD. INTERNO": "MT0157",
    PEÇAS: "CHICOTE ELÉTRICO DA PORTA LADO ESQUERDO TROLLER",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "700",
  },
  {
    "COD. INTERNO": "MT0158",
    PEÇAS: "CHICOTE ELÉTRICO DO PAINEL TROLLER",
    APLICAÇÃO: "TROLLER 09/14",
    UNIDADES: "01 UNID",
    VALOR: "3000",
  },
  {
    "COD. INTERNO": "MT0159",
    PEÇAS: "CHICOTE ELÉTRICO DO PAINEL TROLLER",
    APLICAÇÃO: "TROLLER 06/08",
    UNIDADES: "01 UNID",
    VALOR: "3000",
  },
];
