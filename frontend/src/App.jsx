import { useState } from 'react'
import './App.css'

const initialForm = {
  name: '',
  indexNumber: '',
  gender: '',
  dateOfBirth: '',
  email: '',
  address: '',
  password: '',
}

function App() {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((currentForm) => ({ ...currentForm, [name]: value }))
    setSubmitted(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/frontend/public" aria-label="Campus home">
          <span className="brand-mark" aria-hidden="true">C</span>
          <span>Campus<span className="brand-light">Connect</span></span>
        </a>
        <p className="topbar-note">Your next chapter starts here</p>
      </header>

      <section className="registration-layout" aria-labelledby="page-title">
        <aside className="welcome-panel">
          <span className="eyebrow">WELCOME TO CAMPUS</span>
          <h1>Make room for <span>what’s next.</span></h1>
          <p>
            Create your student account to get started with your university
            journey. It only takes a few minutes.
          </p>
          <div className="welcome-note">
            <span className="note-icon" aria-hidden="true">✦</span>
            <span><strong>Your future, your pace.</strong><br />You can review your details before you submit.</span>
          </div>
          <div className="decorative-shape" aria-hidden="true" />
        </aside>

        <div className="form-panel">
          <div className="form-heading">
            <div>
              <span className="step-label">STUDENT REGISTRATION</span>
              <h2 id="page-title">Create your account</h2>
              <p>Fill in your details below to join the campus community.</p>
            </div>
            <span className="step-count">01 <span>/ 01</span></span>
          </div>

          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="field-grid">
              <label className="field field-wide">
                <span>Full name</span>
                <input
                  autoComplete="name"
                  name="name"
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  required
                  value={formData.name}
                />
              </label>

              <label className="field">
                <span>Student index number</span>
                <input
                  autoComplete="off"
                  name="indexNumber"
                  onChange={handleChange}
                  placeholder="e.g. 2025/CS/014"
                  required
                  value={formData.indexNumber}
                />
              </label>

              <label className="field">
                <span>Gender</span>
                <select name="gender" onChange={handleChange} required value={formData.gender}>
                  <option disabled value="">Select an option</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </label>

              <label className="field">
                <span>Date of birth</span>
                <input
                  autoComplete="bday"
                  name="dateOfBirth"
                  onChange={handleChange}
                  required
                  type="date"
                  value={formData.dateOfBirth}
                />
              </label>

              <label className="field">
                <span>Email address</span>
                <input
                  autoComplete="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="you@example.edu"
                  required
                  type="email"
                  value={formData.email}
                />
              </label>

              <label className="field field-wide">
                <span>Home address</span>
                <input
                  autoComplete="street-address"
                  name="address"
                  onChange={handleChange}
                  placeholder="Street, city, and postal code"
                  required
                  value={formData.address}
                />
              </label>

              <label className="field field-wide">
                <span>Create a password</span>
                <input
                  autoComplete="new-password"
                  minLength={8}
                  name="password"
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  required
                  type="password"
                  value={formData.password}
                />
                <small>Use at least 8 characters to keep your account secure.</small>
              </label>
            </div>

            <button className="submit-button" type="submit">
              Create student account <span aria-hidden="true">→</span>
            </button>
            <p className="form-footnote">By continuing, you agree to the university’s student terms.</p>

            {submitted && (
              <div className="success-message" role="status">
                <span aria-hidden="true">✓</span>
                Your details are ready. Registration submitted successfully!
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className="page-footer">
        <span>© 2025 CampusConnect University</span>
        <span>Need help? <a href="mailto:admissions@example.edu">Contact student services</a></span>
      </footer>
    </main>
  )
}

export default App
