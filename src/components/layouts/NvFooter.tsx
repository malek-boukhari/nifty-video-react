import React from 'react'
import '../../scss/layouts/_nv-footer.scoped.scss'

function NvFooter() {
    return (
        <footer className="footer">
            <p>Questions? Call 1-866-579-7172</p>
            <div className="footer-cols">
                <ul>
                    <li><a href="www.hello-world.com">Help Center</a></li>
                    <li><a href="www.hello-world.com">Jobs</a></li>
                    <li><a href="www.hello-world.com">Terms Of Use</a></li>
                    <li><a href="www.hello-world.com">Contact Us</a></li>
                </ul>
                <ul>
                    <li><a href="www.hello-world.com">Account</a></li>
                    <li><a href="www.hello-world.com">Redeem Gift Cards</a></li>
                    <li><a href="www.hello-world.com">Privacy</a></li>
                    <li><a href="www.hello-world.com">Speed Test</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default NvFooter
