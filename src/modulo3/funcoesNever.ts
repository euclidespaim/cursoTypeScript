function erroFatal(msg: string): never {
  throw new Error(msg);
}

erroFatal("Mensagem de erro!")