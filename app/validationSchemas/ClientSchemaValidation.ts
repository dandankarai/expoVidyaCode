import * as yup from "yup";

const schemaClient = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  cnpj: yup
    .string()
    .required("É necessário informar o CNPJ.")
    .length(14, "O CNPJ deve ter 14 dígitos."),
  telefone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(
      /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$(^\d{14}$)/,
      "Formato de telefone inválido."
    ),
  cep: yup
    .string()
    .required("CEP é obrigatório")
    .matches(/^[0-9]{8}$/, "Formato de CEP inválido."),
  estado: yup.string().required("Estado é obrigatório"),
  cidade: yup.string().required("Cidade é obrigatória"),
  bairro: yup.string().required("Bairro é obrigatório"),
  endereco: yup.string().required("Endereço é obrigatório"),
  numero: yup.number().required("Número é obrigatório").positive().integer(),
});

export default schemaClient;
