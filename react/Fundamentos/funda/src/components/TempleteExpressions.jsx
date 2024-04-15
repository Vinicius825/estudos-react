import Events from "./Events";
import FirtsComponent from "./FirtComponent";


const TemplateExpressions = () => {

    const name = "Vinicius";

    return(
        <div>
           <p>Olá {name},</p>
           <FirtsComponent/>
           <Events />
        </div>
    )
}

export default TemplateExpressions