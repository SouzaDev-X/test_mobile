interface Usuario {
  nome: string;
  email: string;
  idade: number;
  status: boolean;
}

const listaDeUsuarios: Usuario[] = [];

function cadastrarUsuario(usuario: Usuario): void {
  listaDeUsuarios.push(usuario);
}

function listarUsuarios(): void {
  console.log("Lista de Usuários:");
  listaDeUsuarios.forEach((usuario, index) => {
    console.log(`Usuário ${index + 1}:`);
    console.log(`  Nome: ${usuario.nome}`);
    console.log(`  Email: ${usuario.email}`);
    console.log(`  Idade: ${usuario.idade}`);
    console.log(`  Status: ${usuario.status ? "Ativo" : "Inativo"}`);
    console.log("------------------------");
  });
}

cadastrarUsuario({ nome: "Ana Silva", email: "ana@email.com", idade: 28, status: true });
cadastrarUsuario({ nome: "Carlos Souza", email: "carlos@email.com", idade: 34, status: false });
cadastrarUsuario({ nome: "Beatriz Lima", email: "beatriz@email.com", idade: 22, status: true });

listarUsuarios();

