import '../styles/Footer.css'

import { useState } from 'react'

function Footer() {
    const [mailaddress, setMailaddress] = useState('');
    return (
        <footer className='tfs-footer'>
            <div className='tfs-footer-elem'>
				For those who love plants 🌿🌱🌵
			</div>
            <div className='tfs-footer-elem'>Let us know your email address:</div>
            <div>
                <input
                    type='email'
                    placeholder='Enter your mail address'
                    value={mailaddress}
                    onChange={(e) => setMailaddress(e.target.value)}
                    onBlur={() => handleBlur(mailaddress)}
                />
            </div>
        </footer>
    )
}

function handleBlur(inputValue) {
    if (!inputValue.includes('@')) {
        alert('Your mail is not valid. You must enter a valid email address with an "@" symbol.');
    }
}

export default Footer;