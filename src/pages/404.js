import * as React from "react"
import { Helmet } from "react-helmet";

// Css
import * as styles from "../styles/modules/404.module.scss";

// markup
const NotFoundPage = () => {
  return (
    <main id={styles.notfound}>
      <Helmet>
        <title>404 Not Found</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,viewport-fit=cover"
        />
      </Helmet>
      <div>
        <p>
          404 Not Found
        </p>
      </div>
    </main>
  )
}

export default NotFoundPage
