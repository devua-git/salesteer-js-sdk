La documentazione tecnica del SDK JavaScript contenuto nella cartella estratta può essere organizzata come segue. Questa documentazione coprirà le sezioni principali e descriverà i componenti e le funzioni principali del SDK.

---

# Salesteer JavaScript SDK

## Introduzione

Il Salesteer JavaScript SDK fornisce una serie di strumenti per interagire con l'API di Salesteer, facilitando l'integrazione delle funzionalità di Salesteer nelle applicazioni JavaScript. Il SDK è progettato per essere utilizzato sia in ambienti Node.js che in applicazioni frontend.

## Struttura del Progetto

Il progetto è organizzato nei seguenti pacchetti principali:

1. **core**: Contiene il nucleo delle funzionalità del SDK.
2. **vue**: Fornisce integrazioni specifiche per Vue.js.

## Installazione

Per installare il Salesteer JavaScript SDK, eseguire il comando seguente utilizzando npm o yarn:

```bash
npm install salesteer-js-sdk
```

oppure

```bash
yarn add salesteer-js-sdk
```

## Configurazione

Prima di utilizzare il SDK, è necessario configurarlo con le credenziali appropriate. Questo può essere fatto tramite la funzione di configurazione nel modulo `core`.

```javascript
import { configure } from 'salesteer-js-sdk';

configure({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET',
});
```

## Moduli Principali

### Core

#### Client

Il client è il punto di ingresso principale per interagire con l'API di Salesteer.

```javascript
import { Client } from 'salesteer-js-sdk/core';

const client = new Client();
```

#### Risorse

Le risorse rappresentano le varie entità gestite dall'API di Salesteer. Esempi di risorse includono `Cart`, `City`, `Product`, ecc.

Esempio di utilizzo di una risorsa:

```javascript
import { Cart } from 'salesteer-js-sdk/core/resources/cart';

const cart = new Cart();
const cartItems = await cart.getItems();
```

### Vue

#### Provider

I provider sono componenti Vue che forniscono il contesto necessario per l'autenticazione e l'uso delle risorse di Salesteer.

```javascript
<template>
  <SalesteerAuthProvider>
    <!-- Components that need authentication -->
  </SalesteerAuthProvider>
</template>

<script>
import { SalesteerAuthProvider } from 'salesteer-js-sdk/vue/providers';

export default {
  components: {
    SalesteerAuthProvider,
  },
};
</script>
```

#### Hooks

I hook sono funzioni che semplificano l'interazione con il SDK all'interno dei componenti Vue.

Esempio di utilizzo di un hook:

```javascript
import { useSalesteerQueryClient } from 'salesteer-js-sdk/vue/hooks';

const { data, error, loading } = useSalesteerQueryClient('cart', 'getItems');
```

## Tipi

Il SDK include vari tipi TypeScript per fornire tipizzazione rigorosa e autocompletamento durante lo sviluppo.

Esempio di tipi:

```typescript
import { CartItem } from 'salesteer-js-sdk/core/resources/cart/cart.types';

const item: CartItem = {
  id: '123',
  name: 'Product Name',
  quantity: 2,
};
```

## Esempi Completi

### Recuperare e visualizzare i prodotti

```javascript
import { Client } from 'salesteer-js-sdk/core';
import { Product } from 'salesteer-js-sdk/core/resources/product';

const client = new Client();
const product = new Product();

async function displayProducts() {
  const products = await product.getAll();
  console.log(products);
}

displayProducts();
```

### Utilizzo in un componente Vue

```vue
<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error.message }}</div>
  <div v-else>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.name }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useSalesteerQueryClient } from 'salesteer-js-sdk/vue/hooks';

export default defineComponent({
  setup() {
    const { data: products, error, loading } = useSalesteerQueryClient('product', 'getAll');
    return { products, error, loading };
  },
});
</script>
```

## Conclusione

Il Salesteer JavaScript SDK è un potente strumento per interagire con l'API di Salesteer. Con una configurazione semplice e una serie di funzionalità ben definite, è possibile integrare rapidamente le funzionalità di Salesteer nelle proprie applicazioni JavaScript e Vue.js.
