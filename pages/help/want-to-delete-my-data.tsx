import { Typography } from "@mui/material";
import Link from "next/link";
import type { ReactElement } from "react";
import Layout from "../../components/layout-help";

export default function Help_DeleteData() {
  return (
    <>
      <Typography component="h2" variant="h4">
        Quero Que Apaguem Os Meus Dados
      </Typography>
      <p>
        Ao abrigo do Regulamento Geral de Protecção de Dados (RGPD), tem o
        direito de ver os seus dados apagados e removidos dos nossos sistemas
        (este é por vezes chamado o &apos;direito a ser esquecido&apos;).
      </p>{" "}
      <p>
        Se desejar fazer um Pedido de Eliminação de Dados, envie um email para
        webdev@rafaeljesusaraiva.pt com o assunto &apos;GDPR - Apagar Dados -
        &apos;, seguido do seu nome completo (mais informações sobre o que
        enviar nos parágrafos seguintes).
      </p>{" "}
      <p>
        Processaremos o seu pedido em conformidade com o Regulamento Geral de
        Protecção de Dados -
      </p>{" "}
      <p>
        <Link href="https://gdprinfo.eu/pt-pt">Saiba mais sobre a RGPD</Link>
      </p>{" "}
      <p>
        <Link href="/help/privacy-policy">
          Aceder à nossa Declaração de Privacidade
        </Link>
      </p>{" "}
      <p>
        Tenha em atenção que, apesar do seu pedido de eliminação dos seus dados,
        existem razões específicas pelas quais podemos recusar o seu pedido e os
        seus dados continuarão a ser processados. Estas razões são apresentadas
        a seguir.
      </p>{" "}
      <p>
        Tem o direito de ver os seus dados apagados nas seguintes circunstâncias
        -
      </p>{" "}
      <ul>
        {" "}
        <li>
          {" "}
          Quando os dados pessoais já não são necessários em relação à
          finalidade para a qual a Provas Fotografia originalmente os recolheu
          ou processou
          <br />
          <br />{" "}
        </li>{" "}
        <li>
          {" "}
          Quando tiver retirado o seu consentimento para a continuação do
          processamento dos dados e não houver outra base legal para a Provas
          Fotografia continuar a processar os dados
          <br />
          <br />{" "}
        </li>{" "}
        <li>
          {" "}
          Onde se opõe ao processamento. Neste caso, a Provas Fotografia
          determinará se tem um interesse legítimo primordial em continuar o
          processamento
          <br />
          <br />{" "}
        </li>{" "}
        <li>
          {" "}
          Os dados pessoais foram tratados de forma ilegal
          <br />
          <br />{" "}
        </li>{" "}
        <li>
          {" "}
          Os dados pessoais têm de ser apagados devido a uma obrigação legal
          <br />
          <br />{" "}
        </li>{" "}
      </ul>{" "}
      <p>
        Ao receber o seu pedido, a Provas Fotografia responderá no prazo de um
        mês civil a contar do dia seguinte ao da sua recepção.
      </p>{" "}
      <p>
        Apagaremos os dados, a menos que tenhamos uma razão imperiosa para
        continuar a processá-los ou que sejam processados por uma das seguintes
        razões -
      </p>{" "}
      <ul>
        {" "}
        <li>
          {" "}
          exercer os direitos de liberdade de expressão e de informação <br />
          <br />{" "}
        </li>{" "}
        <li>
          {" "}
          para que o Website cumpra um requisito legal
          <br />
          <br />{" "}
        </li>{" "}
        <li>
          {" "}
          o desempenho de uma tarefa realizada no interesse público ou no
          exercício da autoridade pública
          <br />
          <br />{" "}
        </li>{" "}
        <li>
          {" "}
          para fins de saúde pública no interesse público
          <br />
          <br />{" "}
        </li>{" "}
        <li>
          {" "}
          fins de arquivo no interesse público, investigação histórica
          científica ou estatística ou
          <br />
          <br />{" "}
        </li>{" "}
        <li>
          {" "}
          a defesa das acções judiciais
          <br />
          <br />{" "}
        </li>{" "}
      </ul>{" "}
      <p>
        Se uma das circunstâncias acima se aplicar, o seu pedido de eliminação
        será recusado e nós escrever-lhe-emos indicando o motivo da recusa.
      </p>{" "}
      <p>
        Uma vez escolhidas as razões, enumerar e enviar para
        webdev@rafaeljesusaraiva.pt com as orientações indicadas inicialmente.
      </p>{" "}
      <h3>Mais informações</h3>{" "}
      <p>
        Esperemos que esteja esclarecido e, como mencionado anteriormente, se
        houver algo que você não tem certeza, entre em contacto com os
        administradores do website/serviço para mais informações.
      </p>{" "}
      <p>
        Esta política é efetiva a partir de <strong>Março</strong>/
        <strong>2022</strong>.
      </p>
    </>
  );
}

Help_DeleteData.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Quero Que Apaguem Os Meus Dados">{page}</Layout>;
};
