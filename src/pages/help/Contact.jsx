

const Contact = () => {
    return (

        <div className="contact">
            <h3>Contact US</h3>

            <form >
                <label>
                    <span>Your email</span>
                    <input type="email" name="email" required />
                </label><br />
                <label>
                    <span>Your message</span>
                    <textarea name="message" required />
                </label><br /><br />
                <label>
                    <button>Submit</button>
                </label>

            </form>
        </div>
    );
}

export default Contact;