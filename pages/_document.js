import { Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
