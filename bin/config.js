export function createConfig(answer) {
  function haveMiddleware(name) {
    return answer.middleware.includes(name);
  }

  return {
    packageName: answer.packageName,
    port: answer.port,
    middleware: {
      static: haveMiddleware("koaStatic"),
      router: haveMiddleware("koaRouter"),
    },
  };
}
