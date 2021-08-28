import Titulo from '../../components/Titulo'

export default function usandoTitulo(props) {
  return (

    <div>
      <Titulo
        principal='Pagina de Cadastro'
        secundario='Incluir, alterar, excluir'
        pequeno
      />
      <Titulo
        principal='Pagina de Cadastro'
        secundario='Incluir, alterar, excluir'
      />
      <Titulo
        principal='Pagina de Cadastro'
        secundario='Incluir, alterar, excluir'
        pequeno
      />
    </div>
  )
}

