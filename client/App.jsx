import { Counter } from './Counter';

export const App = ({ products }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My app</title>
      </head>
      <body>
        <ol>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
        </ol>
        <Counter />
      </body>
    </html>
  )
}
