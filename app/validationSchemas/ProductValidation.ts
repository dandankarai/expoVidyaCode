import * as yup from "yup";

const schemaProduct = yup.object({
  name: yup.string().required("Nome do produto é obrigatório"),
  price: yup
    .string()
    .required("É necessário informar o preço."),
  description: yup
    .string()
    .required("Descrição é obrigatório")
    .length(20,'Descrição precisa conter no minimo 20 palavras')
});

export default schemaProduct;
