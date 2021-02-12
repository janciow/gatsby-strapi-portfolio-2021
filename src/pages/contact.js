import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get int touch</h3>
          <form action="https://formspree.io/f/meqpdyry" method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="name" className="form-control" />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                type="message"
                rows="5"
                className="form-control"
                placeholder="message"
                name="message"
              />
            </div>

            <button type="submit" className="submit-btn btn">submit here</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
