# Camadas

Domain -> Criar as Regras de negocio no formato de interfaces, para que possa ser implementado em qualquer tecnologia.

Data -> Criar as classes que irão implementar as interfaces do Domain.

Infra -> Implementação de tecnologias especificas, como banco de dados, API, etc. Aqui nessa camada utilizamos bibliotecas externas.

Presentation -> Camada de apresentação, onde fica a tela, o que o usuário irá ver.

Validation -> Camada de validação, onde fica as validações de campos, como email, senha, etc. (usa o composite pattern).

Main -> Depende de todas as outras camadas, é onde fica a injeção de dependências.

Dependencias:

- Domain <- Data
- Data <- Infra
- Domain <- Presentation
- Presentation <- Validation
- All <- Main

## Exemplo: Tela de Login

Domain -> Regras de negocio

Data -> Tratar Erros da API, Tratar Resposta da API

Infra -> Comunicar com a API

Presentation -> Renderizar a View, Controlar Estado da View, Navegação, Gravar dados no cache, etc.

Validation -> Validar campos de email e senha

Main -> Injeção de dependências

## Palavras Chaves

- DDD (Domain Driven Design) -> Metodologia de desenvolvimento de software, onde o foco é o dominio do negocio.

- SOLID -> Princípios de desenvolvimento de software.

- I of SOLID -> Interface Segregation Principle (ISP) -> Princípio da Segregação de Interfaces. Uma classe não deve ser forçada a implementar interfaces e métodos que não irá utilizar.

- Injeção de Dependências -> Técnica para desacoplar as classes.

- sut -> System Under Test -> Classe que está sendo testada.
