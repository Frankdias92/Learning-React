# **Projeto elaborado para fins de estudos**


nesse projeto aprendi na pratica o uso dos Hooks, aproveitei e escrevi sobre o hooks no Medium, no final deixo o link para leitura.


O React, sendo a biblioteca mais popular, oferece diversas ferramentas que tornam a criação de aplicações mais eficiente.



# **React Hooks**

React Hooks, introduzidos na versão 16.8 do React, são funções que permitem aos desenvolvedores utilizar o estado e outros recursos do React em componentes funcionais. Antes da introdução dos Hooks, os componentes funcionais eram limitados em termos de gerenciamento de estado e outros recursos, sendo as classes a abordagem principal para isso. Com os Hooks, os componentes funcionais tornaram-se mais poderosos e flexíveis.

## **Principais React Hooks:**

### **useState:**

- Permite adicionar estado a componentes funcionais.

```jsx
const [contador, setContador] = useState(0);
```

### **useEffect:**

- Lida com efeitos colaterais em componentes funcionais, como requisições assíncronas, manipulação do DOM.

```jsx
useEffect(() => {
  // Código a ser executado após a renderização do componente
}, [dependencias]);
```

### **useContext:**

- Facilita o acesso ao contexto em componentes funcionais, evitando a necessidade de encadeamento de props.

```jsx
const contexto = useContext(MeuContexto);
```

### **useReducer:**

- Fornece uma alternativa ao **`useState`** para gerenciar estados complexos através de um redutor (reducer) de ações.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### **useCallback e useMemo:**

- Otimizam o desempenho evitando a recriação desnecessária de funções ou valores calculados em cada renderização.
- Exemplo **`useCallback`**:
    
    ```jsx
    const memoizedCallback = useCallback(() => {
      // Callback
    }, [dependencias]);
    ```
    
- Exemplo **`useMemo`**:
    
    ```jsx
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    ```
    

Os Hooks simplificam a lógica do componente, tornando o código mais legível e fácil de entender. Eles também resolvem problemas de reutilização de lógica de estado e efeitos em componentes funcionais, anteriormente desafiadores de implementar de maneira limpa.

Com a introdução dos Hooks, o React proporcionou uma evolução significativa na forma como os desenvolvedores constroem componentes, oferecendo uma abordagem mais declarativa e funcional para o desenvolvimento de interfaces de usuário.


# Conclusão

##Aprendizado Prático dos Hooks:
Aprendi na prática o uso dos React Hooks. nada melhor do que colocar os neuronios para queimar um pouco, pois é na prática que aprendo.

##Transformação dos Componentes Funcionais:
Com a introdução dos Hooks, os componentes funcionais se tornaram mais poderosos e flexíveis. Isso representa uma mudança significativa na forma como o React lida com o gerenciamento de estado e outros recursos em componentes funcionais.


#Principais Hooks Utilizados:

###useState:
Adição de estado a componentes funcionais.

###useEffect:
Lida com efeitos colaterais em componentes funcionais.

###useContext:
Facilitar o acesso ao contexto.

###useReducer:
Alternativa ao useState para gerenciar estados complexos, inclusive gostei muito de aprender esse em particular, apesar de um tanto complicado no inicio mas vejo um grande potencial em projetos futuros.

###useCallback e useMemo:
Otimização de desempenho evitando recriação desnecessária de funções ou valores calculados.
Melhoria na Legibilidade do Código: Os Hooks simplificaram a lógica do componente, tornando o código mais legível e fácil de entender. Eles também resolveram problemas de reutilização de lógica de estado e efeitos em componentes funcionais.

aprender React foi um game change, sem duvidas foi uma das melhores coisas que vim e venho a aprender, O React vem me oferecendo uma evolução siginificativa no meu aprendizado como desenvolvedor. uma abordagem mais declarativa e funcional proporcionando uma experiencia muito gratificante.

---
<p align="center">
  <a href="https://www.linkedin.com/in/franklinmacedodias/">Linkedin</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://medium.com/@frankmcdias">Medium</a>
</p>