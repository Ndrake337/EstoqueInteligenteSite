import './ChangeProductOnShelf.css'

export default function AddNewProducts({ dataShelfs, dataProducts}) {
  
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

          <datalist id='AvailableShelfs'>
            {AvailableShelfs}
          </datalist>
          
          <datalist id='AvailableProducts'>
            {AvailableProducts}
          </datalist>
          
          <form action="" method="post" className='FormAddNewProduct'>
            <fieldset>
              <legend>Produto</legend>
              <input type="text" name='productName' autoFocus placeholder='Selecione o Produto' list='AvailableProducts' required/>
            </fieldset>
            
            <fieldset>
              <legend>Prateleira</legend>
              <input type="text" name='shelfName' autoFocus placeholder='Selecione a Prateleira' list='AvailableShelfs' required/>
            </fieldset>
            
            <button type="submit">Cadastrar um Produto</button>  
          
          </form>
        </div>
      </div>
    </div>
  )
}
