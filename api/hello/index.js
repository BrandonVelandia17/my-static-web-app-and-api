module.exports = async function (context, req) {
  context.res = {
    status: 200,
    body: { message: "API funcionando correctamente en Azure 🚀" }
  };
};
