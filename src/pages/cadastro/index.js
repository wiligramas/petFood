import Header from '../../components/header'
import Illustration from '../../assets/illustration.png';
import '../../styles/global.css';

const Cadastro = () => {

    return (
        <div className='container-fluid h-100 bg-primary'>
          <Header whiteVersion />
          <div className="row">

            <div className="col-6 text-right my-auto">
            <img src={Illustration} className="img-fluid" alt='Ilustração'/>
            </div>


            <div className="col-6">
              <div className="box col-8" >
                
                <h2 className="text-center">
                  Falta pouco pra fazer o seu pet feliz.
                </h2>
                <br />
                <br />

                <input
                  type="text"
                  className="form-control form-control-lg mb-3"
                  placeholder="Nome completo"
                  /*onChange={(e) => {
                    setCustomer({ ...customer, name: e.target.value });
                  }}*/
                />

                <input 
                  type="text"
                  className="form-control form-control-lg mb-3"
                  placeholder="E-mail"
                />

                <input 
                  type="text"
                  className="form-control form-control-lg mb-3"
                  placeholder="Telefone"
                />

                <input 
                  type="text"
                  className="form-control form-control-lg mb-3"
                  placeholder="BI"
                />

                <input 
                  type="date"
                  className="form-control form-control-lg mb-3"
                  placeholder="Data"
                />

                <button
                  type='button' 
                  className='btn btn-lg btn-block btn-secondary'    
                >
                  Finalizar pedido
                </button>    


              </div>          
            </div>        


          </div>       
        </div>
    )
};

export default Cadastro;