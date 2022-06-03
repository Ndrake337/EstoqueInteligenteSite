import './AddNewProducts.css'
import { useState } from 'react';
export default function AddNewProducts({ dataProducts }) {
  const [value, setValue] = useState("");
  const [produtoName, setprodutoName] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmitProd = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://apiestoqueinteligente.herokuapp.com/crudProdutos", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: value,
          productName: produtoName,
          weight: Number(weight),
          price: Number(price),
          amount: Number(amount),
        }),
      });
      console.log(res)
      let resJson = await res.json();
      console.log(resJson)
      if (res.status === 200) {
        setValue("");
        setprodutoName("");
        setWeight("");
        setPrice("");
        setAmount("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const AvailableProducts = dataProducts.map((dataProducts) =>
    <option key={dataProducts} id={dataProducts.productId} >{dataProducts.productName}</option>
  );

  const ProductName = () =>{
    console.log(value)
    if (value === 'Atualizar Produto' || value === 'Deletar Produto' ){
            return(<select type="text" name='NomeDoProduto' onChange={(e) => setprodutoName(e.target.value)} value={produtoName} autoFocus placeholder='Digite o Nome do produto' required>
              <option selected value={''} > -- select an option -- </option>
              {AvailableProducts}
            </select>)
    }
    else{
        return(<input type="text" name='NomeDoProduto' onChange={(e) => setprodutoName(e.target.value)} value={produtoName} autoFocus placeholder='Digite o Nome do produto' required />)
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
          <form onSubmit={handleSubmitProd} className='FormAddNewProduct'>
            <fieldset>
              <legend>Ação desejada</legend>
              <select 
              name='ActionOnCrud' 
              autoFocus 
              placeholder='Selecione a Ação desejada' 
              value={value}
              onChange={e => setValue(e.target.value)} 
              required>
                <option selected value={''} > -- select an option -- </option>
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
              <input type="number" name="pesoMedio" id="pesoMedio" step="0.01" inputMode='numeric' onChange={(e) => setWeight(e.target.value)} value={weight} required />
            </fieldset>

            <fieldset>
              <legend>Preço</legend>
              <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} id="price" step="0.01" inputMode='numeric' required />
            </fieldset>

            <fieldset>
              <legend>Quantidade em Estoque</legend>
              <input type="number" name="amount" id="amount" inputMode='numeric' onChange={(e) => setAmount(e.target.value)} value={amount} required />
            </fieldset>

            <button type="submit">Cadastrar um Produto</button>

          </form>
        </div>
        {console.log(message)}
      </div>
    </div>
  )
}
