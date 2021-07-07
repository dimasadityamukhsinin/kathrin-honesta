import * as React from "react"

// Css
import * as styles from "../styles/modules/404.module.scss";

// Layout
import MainLayout from "../components/layout/mainLayout";
import NavScroll from "../components/navScroll";

// markup
const NotFoundPage = () => {
  return (
    <MainLayout pageTitle="404 Not Found">
      <NavScroll topTitle="Back to Projects" topLink="projects" />
      <div id={styles.notfound}>
        <div>
          <p>
            404 Not Found
          </p>
        </div>
      </div>
    </MainLayout>
  )
}

export default NotFoundPage
