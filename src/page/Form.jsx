import './Form.css';
function Form() {
    return(
        <div className="contact">
            <div className="center">
                <h2> Ocenite Vas obilazak zoo-vrta </h2>
                <form>
                <label htmlFor="name">Ime</label>
          <input name="name" placeholder="Upišite svoje ime..." type="text" required/>
          <label htmlFor="email">Email </label>
          <input name="email" placeholder="Upišite email adresu..." type="email" required/>
          <label htmlFor="message">Poruka</label>
          <textarea
            rows="6"
            placeholder="Tekst poruke..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Pošaljite poruku</button>
                </form>
            </div>
        </div>
    )
}

export default Form;