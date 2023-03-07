import { Link } from 'react-router-dom'
import SectionTitle from '../shared/SectionTitle'
import InputBox from './InputBox'
import SocialButton from './SocialButton'

const Register = () => {
  return (
    <section class="register section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            {/* section title */}
            <SectionTitle subtitle="Register" title="Start for free today" description="Access to all features.no credit card required." />
            
            {/* google, facebook button */}
            <SocialButton/>

            <h4 class="divider">Or continue with</h4>

            <form action="#!">
              <InputBox inputType="text" label="Full Name" id="fname" />

              <InputBox inputType="email" label="Email" id="emaill" />

              <InputBox inputType="text" label="User Name" id="uname" placeholder="Your user name" />

              <InputBox inputType="password" label="Password" id="pass" />

              <div class="input-box input-check-box">
                <label for="chk" class="check-container">
                  <input type="checkbox" class="input-check" id="chk"/>
                  <span class="checkmark"></span>
                  <span>I accept the <Link to="/">Terms</Link></span>
                </label>
              </div>

              <div class="input-box">
                <button type="submit" class="animate-btn animate-btn-fill">Submit & Register</button>
              </div>

              <div class="input-box">
                <p>Already have an account? <Link to="/login">Sign In</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register