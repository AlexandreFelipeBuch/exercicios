function acao1() {
  console.log("Ação1")

}

export default function botao() {
  function acao2() {
    console.log("Ação2")
  }
  return (
    <div>
      <button onClick={acao1}>Click01</button>
      <button onClick={acao2}>Click02</button>
    </div>
  )
}
