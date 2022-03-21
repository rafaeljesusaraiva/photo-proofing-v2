import { Typography } from "@mui/material";
import Link from "next/link";
import type { ReactElement } from "react";
import Layout from "../../components/layout-help";

export default function Help_TermsOfService() {
  return (
    <>
      <Typography component="h2" variant="h4">
        1. Termos
      </Typography>
      <p>
        Ao acessar ao site{" "}
        <Link href="https://provas.rafaeljesusaraiva.pt">
          Provas Fotografia
        </Link>
        , concorda em cumprir estes termos de serviço, todas as leis e
        regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento
        de todas as leis locais aplicáveis. Se você não concordar com algum
        desses termos, está proibido de usar ou acessar este site. Os materiais
        contidos neste site são protegidos pelas leis de direitos autorais e
        marcas comerciais aplicáveis.
      </p>
      <Typography component="h2" variant="h4">
        2. Uso de Licença
      </Typography>
      <p>
        É concedida permissão para baixar temporariamente uma cópia dos
        materiais (informações ou software) no site Provas Fotografia , apenas
        para visualização transitória pessoal e não comercial. Esta é a
        concessão de uma licença, não uma transferência de título e, sob esta
        licença, você não pode:{" "}
      </p>
      <ol>
        {" "}
        <li>modificar ou copiar os materiais; </li>{" "}
        <li>
          usar os materiais para qualquer finalidade comercial ou para exibição
          pública (comercial ou não comercial);{" "}
        </li>{" "}
        <li>
          tentar descompilar ou fazer engenharia reversa de qualquer software
          contido no site Provas Fotografia;{" "}
        </li>{" "}
        <li>
          remover quaisquer direitos autorais ou outras notações de propriedade
          dos materiais; ou{" "}
        </li>{" "}
        <li>
          transferir os materiais para outra pessoa ou &apos;espelhe&apos; os
          materiais em qualquer outro servidor.
        </li>{" "}
      </ol>
      <p>
        Esta licença será automaticamente rescindida se você violar alguma
        dessas restrições e poderá ser rescindida por Provas Fotografia a
        qualquer momento. Ao encerrar a visualização desses materiais ou após o
        término desta licença, você deve apagar todos os materiais baixados em
        sua posse, seja em formato eletrónico ou impresso.
      </p>
      <Typography component="h2" variant="h4">
        3. Isenção de responsabilidade
      </Typography>
      <ol>
        {" "}
        <li>
          Os materiais no site da Provas Fotografia são fornecidos &apos;como
          estão&apos;. Provas Fotografia não oferece garantias, expressas ou
          implícitas, e, por este meio, isenta e nega todas as outras garantias,
          incluindo, sem limitação, garantias implícitas ou condições de
          comercialização, adequação a um fim específico ou não violação de
          propriedade intelectual ou outra violação de direitos.{" "}
        </li>{" "}
        <li>
          Além disso, o Provas Fotografia não garante ou faz qualquer
          representação relativa à precisão, aos resultados prováveis ​​ou à
          confiabilidade do uso dos materiais em seu site ou de outra forma
          relacionado a esses materiais ou em sites vinculados a este site.
        </li>{" "}
      </ol>
      <Typography component="h2" variant="h4">
        4. Limitações
      </Typography>
      <p>
        Em nenhum caso o Provas Fotografia ou seus fornecedores serão
        responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por
        perda de dados ou lucro ou devido a interrupção dos negócios)
        decorrentes do uso ou da incapacidade de usar os materiais em Provas
        Fotografia, mesmo que Provas Fotografia ou um representante autorizado
        da Provas Fotografia tenha sido notificado oralmente ou por escrito da
        possibilidade de tais danos. Como algumas jurisdições não permitem
        limitações em garantias implícitas, ou limitações de responsabilidade
        por danos conseqüentes ou incidentais, essas limitações podem não se
        aplicar a você.
      </p>
      <Typography component="h2" variant="h4">
        5. Precisão dos materiais
      </Typography>
      <p>
        Os materiais exibidos no site da Provas Fotografia podem incluir erros
        técnicos, tipográficos ou fotográficos. Provas Fotografia não garante
        que qualquer material em seu site seja preciso, completo ou atual.
        Provas Fotografia pode fazer alterações nos materiais contidos em seu
        site a qualquer momento, sem aviso prévio. No entanto, Provas Fotografia
        não se compromete a atualizar os materiais.
      </p>
      <Typography component="h2" variant="h4">
        6. Links
      </Typography>
      <p>
        O Provas Fotografia não analisou todos os sites vinculados ao seu site e
        não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de
        qualquer link não implica endosso por Provas Fotografia do site. O uso
        de qualquer site vinculado é por conta e risco do usuário.
      </p>{" "}
      <Typography component="h3" variant="h5">
        Modificações
      </Typography>{" "}
      <p>
        O Provas Fotografia pode revisar estes termos de serviço do site a
        qualquer momento, sem aviso prévio. Ao usar este site, você concorda em
        ficar vinculado à versão atual desses termos de serviço.
      </p>{" "}
      <Typography component="h3" variant="h5">
        Lei aplicável
      </Typography>{" "}
      <p>
        Estes termos e condições são regidos e interpretados de acordo com as
        leis do Provas Fotografia e você se submete irrevogavelmente à
        jurisdição exclusiva dos tribunais naquele estado ou localidade.
      </p>
    </>
  );
}

Help_TermsOfService.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Termos de Serviço">{page}</Layout>;
};
