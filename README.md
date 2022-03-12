## Micro-Serviço com Node.JS

-Utilizando a Kafka;
-Utilizando Node;

## Aplicações

- API principal (Station);
- Geração de certificado;

## Fluxo da Aplicação

- API principal envia uma mensagem pro serviço de certificado para gerar o certificado;
- Micro-Serviço de certificado devolve uma resposta (síncrona/Assíncrona);

- Receber uma resposta assíncrone de quando o email com o certificado foi enviado;

## O que sabemos ?

- REST  possui Latência;
- Redis / RabbitMQ / **Kafka**;

- Kafka utilizado por Uber, Paypal, Netflix, Nubank;

