import './ChangeProductOnShelf.css'
import { useState } from 'react';


export default function AddNewProducts({ dataShelfs, dataProducts }) {
  
  
  const [productName, setproductName] = useState("");
  const [shelfName, setshelfName] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://apiestoqueinteligente.herokuapp.com/atualizaProdutoPrateleira", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome_produto: productName,
          nome_prateleira: Number(shelfName.replace('Prateleira ','')),
        }),
      });
      console.log(res)
      let resJson = await res.json();

      if (res.status === 200) {
        setshelfName("");
        setproductName("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };


  const AvailableShelfs = dataShelfs.map((dataShelfs) =>
    <option key={dataShelfs} id={dataShelfs.shelfId} >{dataShelfs.shelfName}</option>
  );

  const AvailableProducts = dataProducts.map((dataProducts) =>
    <option key={dataProducts} id={dataProducts.productId} >{dataProducts.productName}</option>
  );
  return (
    <div className="ChangeProductOnShelf">
      <div className="ChangeProductOnShelfContainer">
        <div className="FormContainer">
          <div className="textContent">
            <span className="titleOfReg">Alterar Produtos Na Prateleira</span>
            <span className="subtitle">Selecione a o produto a ser cadastrado na Prateleira</span>
          </div>
          <form onSubmit={handleSubmit} className='FormAddNewProduct'>
            <fieldset>
              <legend>Produto</legend>
              <select 
                type="text" 
                name='productName' 
                value={productName}
                onChange={(e) => setproductName(e.target.value)}
                autoFocus 
                placeholder='Selecione o Produto' 
                list='AvailableProducts' 
                
                required>
                <option selected value={''} > -- select an option -- </option>
                {AvailableProducts}

              </select>
            </fieldset>

            <fieldset>
              <legend>Prateleira</legend>
              <select 
                type="text" 
                name='shelfName'
                value={shelfName}
                onChange={(e) => setshelfName(e.target.value)} 
                autoFocus 
                placeholder='Selecione a Prateleira' 
                list='AvailableShelfs' 
                required>
                <option selected value={''} > -- select an option -- </option>
                {AvailableShelfs}
              </select>
            </fieldset>

            <button type="submit">Cadastrar um Produto</button>

          </form>
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </div>
      </div>
    </div>
  )
}
