var listaDeUsuarios = [];
function cadastrarUsuario(usuario) {
    listaDeUsuarios.push(usuario);
}
function listarUsuarios() {
    console.log("Lista de Usuários:");
    listaDeUsuarios.forEach(function (usuario, index) {
        console.log("Usu\u00E1rio ".concat(index + 1, ":"));
        console.log("  Nome: ".concat(usuario.nome));
        console.log("  Email: ".concat(usuario.email));
        console.log("  Idade: ".concat(usuario.idade));
        console.log("  Status: ".concat(usuario.status ? "Ativo" : "Inativo"));
        console.log("------------------------");
    });
}
cadastrarUsuario({ nome: "Ana Banana", email: "ana@email.com", idade: 28, status: true });
cadastrarUsuario({ nome: "Dani Ficada", email: "carlos@email.com", idade: 34, status: false });
cadastrarUsuario({ nome: "Thais Tragada", email: "beatriz@email.com", idade: 22, status: true });
listarUsuarios();
