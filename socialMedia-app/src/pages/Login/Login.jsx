import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className="container">
    <header>
        <h1>facebook</h1>
        <p id="firstP">Facebook helps you connect and share with the people in your life.</p>
    </header>
    <main>
        <form action="" autoComplete="on">
            <input id="email" type="email" placeholder="Email address or phone number" />
            <input id="password" type="password" placeholder="Password" />
            <button id="logInBtn">Log in</button>
            <span className="anker"><a href="forgot_password.html">Forgotten Password?</a></span>
            <div className="line"></div> {/* For a horizontal line */}
            <button className="btn">Create new account</button>
        </form>
        <p className="lastP"><span style={{ fontWeight: "bold" }}>Create a Page</span> for celebrity, brand or business.</p>
    </main>
    <footer>
        <p>English (UK)
            नेपाली
            हिन्दी
            Español
            Português (Brasil)
            日本語
            Français (France)
            Deutsch
            Italiano
            العربية
            中文(简体)</p>
        <div className="line"></div>
        <p>Sign Up  Log in  Messenger  Facebook Lite  VideoPlaces  GamesMarketplaceMeta   PayMeta   StoreMeta  
            QuestInstagramThreads  Fundraisers  Services  Voting InformatCentre  PrivacyPolicy  Privacy  
            CentreGroups  About  Create ad   Create   PageDevelopers  Careers  Cookies  AdChoices  Terms  Help  Contact uploading and
            non-users  Settings  Activity log

            <br />
            <br />
            Meta © 2023
            <br />
        </p>  
    </footer>
</div>

    )
}

export default Login