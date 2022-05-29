import './AddNewProducts.css'
import { useState } from 'react';
export default function AddNewProducts({ dataProducts }) {
  const [value, setValue] = useState();

  const AvailableProducts = dataProducts.map((dataProducts) =>
    <option key={dataProducts} id={dataProducts.productId} >{dataProducts.productName}</option>
  );

  const ProductName = () =>{
    console.log(value)
    if (value === 'Atualizar Produto' || value === 'Deletar Produto' ){
            return(<select type="text" name='NomeDoProduto' autoFocus placeholder='Digite o Nome do produto' required>
              {AvailableProducts}
            </select>)
    }
    else{
        return(<input type="text" name='NomeDoProduto' autoFocus placeholder='Digite o Nome do produto' required />)
    }
  } 

  return (
    <div className="AddNewProducts">
      <div className="AddNewProductContainer">
        <div className="FormContainer">
          <div className="textContent">
            <span className="titleOfReg">Cadastro de Novos Produtos</span>
            <span className="subtitle">Insira ao lado as informações de novos produtos</span>
          </div>
          <datalist id='AvailableProducts'>{AvailableProducts}</datalist>
          <form action="" method="post" className='FormAddNewProduct'>
            <fieldset>
              <legend>Ação desejada</legend>
              <select name='ActionOnCrud' autoFocus placeholder='Selecione a Ação desejada' onChange={e => setValue(e.target.value)} required>
                <option> Cadastrar Novo Produto </option>
                <option> Atualizar Produto </option>
                <option> Deletar Produto </option>
              </select>
            </fieldset>

            <fieldset>
              <legend>Nome Do Produto</legend>
              {ProductName()}
            </fieldset>

            <fieldset>
              <legend>Peso Médio</legend>
              <input type="number" name="pesoMedio" id="pesoMedio" step="0.01" inputMode='numeric' required />
            </fieldset>

            <fieldset>
              <legend>Preço</legend>
              <input type="number" name="price" id="price" step="0.01" inputMode='numeric' required />
            </fieldset>

            <fieldset>
              <legend>Quantidade em Estoque</legend>
              <input type="number" name="amount" id="amount" inputMode='numeric' required />
            </fieldset>

            <button type="submit">Cadastrar um Produto</button>

          </form>
        </div>
      </div>
    </div>
  )
}
