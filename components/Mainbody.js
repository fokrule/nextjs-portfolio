const Mainbody = () => {
	return (
		<div>
        <div className="grid">
          <a href="https://github.com/fokrule" className="card">
            <h3>GitHub &rarr;</h3>
            <p>Have a look into my gitHub projects.</p>
          </a>

          <a href="https://www.linkedin.com/in/a-t-m-fokrule-hasan-a052a696/" className="card">
            <h3>linkedin &rarr;</h3>
            <p>Vist my Linkedin profile and make a connection with me.</p>
          </a>

          <a
            href="https://medium.com/@forhad095"
            className="card"
          >
            <h3>Medium &rarr;</h3>
            <p>Discover my Medium profile.</p>
          </a>

          <a
            href="https://stackoverflow.com/users/6731111/fokrule"
            className="card"
          >
            <h3>Stackoverflow &rarr;</h3>
            <p>
              Do a tour into my stackoverflow world.
            </p>
          </a>
        </div>
        <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
		</div>
	)
}
export default Mainbody