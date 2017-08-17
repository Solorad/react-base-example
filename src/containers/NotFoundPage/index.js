import React from "react";
import Helmet from "react-helmet";
import { Container } from "src/components";
import { Link } from "react-router";

const NotFoundPage = () =>
  <div>
    <Helmet title="Page is not found" />
    <section className="main-content subpage">
      <Container>
        <div className="text-center">
          <h4>
            The page you are looking for is not found.
            Click <Link to="/">here</Link> to go back to home page
          </h4>
        </div>
      </Container>
    </section>
  </div>;

export default NotFoundPage;
