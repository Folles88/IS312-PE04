import './App.css'

function App() {
  return (
    <>
      {/* Header section with the main title */}
      <header>
        <h1>Web Design Project</h1>
      </header>

      {/* Main content contains two sections */}
      <main>
        <section>
          {/* First section introduces the project */}
          <h2>About This Project</h2>
          <p>This website is a project for my Web Design and Programming course.</p>
          <p>Hello, City University of Seattle!</p>
        </section>

        <section>
          {/* Second section lists resources */}
          <h2>Resources</h2>
          <p>Visit the university website:</p>
          <a href="https://www.cityu.edu/">City University of Seattle</a>
        </section>
      </main>

      {/* Footer section with author information */}
      <footer>
        <p>Created by Karen Folles</p>
      </footer>
    </>
  )
}

export default App