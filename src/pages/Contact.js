import {useParams} from 'react-router-dom';

function Contact() {
  const {nome, sobrenome} = useParams();
  return (
    <>
      <div>
        <h1>Entre em contato{nome && `, ${nome}`} {sobrenome && ` ${sobrenome}`}</h1>
        <p>Ficou interessado em nosso produtos e serviços? Entre já em contato! Com certeza, temos a melhor solução para você!</p>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
