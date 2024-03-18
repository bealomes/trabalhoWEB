// Arquivo: App.js

import React from 'react';
import ProjectCard from './ProjectCard';
import PersonalInfoCard from './PersonalInfoCard';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Meu Portfólio</h1>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="#sobre" className="hover:text-gray-400">Sobre</a></li>
              <li><a href="#projetos" className="hover:text-gray-400">Projetos</a></li>
              <li><a href="#contato" className="hover:text-gray-400">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>

      
        {/* Sobre Mim */}
        <section id="sobre" className="py-12 bg-gray-400">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <div className="text-center mb-8">
            <img src="https://media.licdn.com/dms/image/D4D03AQFy5O-85DAu9Q/profile-displayphoto-shrink_800_800/0/1700015141958?e=2147483647&v=beta&t=UXXt5i__9Nho55chhxMLuCfP_XJtfTSCtHGSqaZou6A" alt="Beatriz Lomes da Silva" className="rounded-full w-48 h-48 mx-auto mb-2 border-4 border-gray-600" />
            <h3 className="text-2xl font-bold">Beatriz Lomes da Silva</h3>
          </div>
          <p className="text-lg text-gray-800 mb-10">
              Sou Beatriz Lomes da Silva, uma estudante dedicada e entusiasta da área de Engenharia de Computação. Minha jornada acadêmica começou no Instituto Federal de Educação, Ciência e Tecnologia (IFSP), onde cursei o Ensino Médio Integrado ao Técnico em Informática para a Internet de 2018 a 2020. Durante esse período, tive a oportunidade de aprofundar meu conhecimento em tecnologia e desenvolver habilidades essenciais para minha carreira.

            Atualmente, estou cursando Engenharia de Computação na Universidade de São Paulo, especificamente na Escola de Engenharia de São Carlos (EESC-USP) e no Instituto de Ciências Matemáticas e de Computação (ICMC - USP). Este novo capítulo da minha vida acadêmica tem sido uma experiência empolgante, onde estou constantemente aprendendo e buscando me aprimorar nas áreas de computação, eletrônica e engenharia de software.

            Estou ansiosa para continuar minha jornada educacional, expandir meus conhecimentos e contribuir para projetos que possam fazer a diferença no mundo da tecnologia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <PersonalInfoCard title="Telefone" info="(16) 99738-01861" />
            <PersonalInfoCard title="Email" info="b.lomes@usp.br" />
            <PersonalInfoCard title="Email Alternativo" info="lomes.beatriz.s@gmail.com" />
          </div>
         
        </div>
      </section>
      {/* Projetos */}
      <section id="projetos" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Projeto 1 */}
            <ProjectCard
              title="RECICLE++"
              info="Início: 09/2022
                    Fim: Ainda no Projeto
                    Instituição pertencente: USP e CEFET/MG
                    Participação: A ideia do projeto é desenvolver um software que otimize a coleta de reciclagem, a qual conta com dois aplicativos (Doador e coletor) e um site administrativo que cuida da parte de cadastrar, gerenciar e ter uma visão geral das coletas realizadas. Para esse projeto fiquei responsável principalmente pela parte de desenvolver o site administrativo. Identifiquei quais eram os requisitos do projeto, desenvolvi a prototipagem e a documentação para o projeto. Após a prototipagem, realizei a parte de codificação utilizando ferramentas como ReactJS, NodeJS e Firebase para criação do site administrativo."
            />
            {/* Projeto 2 */}
            <ProjectCard
              title="Campanha do Agasalho"
              info="Início: 09/2023
                    Fim: Ainda no Projeto
                    Instituição pertencente: USP
                    Participação: 09/2023 à 12/2023 - Membro Núcleo Entidades. Participei ativamente do núcleo responsável pelo manuseio de doações e contato com instituições de caridade. Participei de triagens (Selecionar, separar e contar as roupas arrecadadas), visitas (participação direta na entidade, realizar alguma atividade ou dinâmica com os membros da entidade), bazar (doação de roupas para a comunidade). 01/2021 (Atualmente) - Coordenadora do Núcleo Entidades. Organizei e planejei as atividades semestrais do núcleo, criei e atualizei as documentações, gerenciei e acompanhei a atuação dos membros. O grupo que administrava possuía mais de 40 membros."
            />
            {/* Projeto 3 */}
            <ProjectCard
              title="SAEComp"
              info="Início: 04/2021
                    Fim: Ainda no Projeto
                    Instituição pertencente: USP
                    Participação: 04/2021-01//2022 - Membro Diretoria de Eventos. Gerenciamento de projetos, organizar minicursos e desenvolver atividades de integração. 01/2022-01/2023 - Diretora da Diretoria de Eventos. Gerenciar membros e projetos da diretoria, arrecadar dinheiro para a secretaria através de eventos e promover integração. 01/2023-01/2024 - Presidente. Coordenadora geral da Secretaria Acadêmica, que possuía 65 membros ativos, 8 diretorias. 01/2024 - Membro Honorário."
            />
            {/* Projeto 4 */}
            <ProjectCard
              title="SENC"
              info="Início: 09/2023
                    Fim: Ainda no Projeto
                    Instituição pertencente: USP
                    Participação: 04/2022 à 12/2022 - Web Developer. Atualização do site para a nova edição e implementação de melhorias para facilitar a dinâmica da semana da Engenharia de Computação. 01/2023 à 12/2023 - Membro da Diretoria de Conteúdos. Realizei a confecção do cronograma e contatei convidados para participar, busquei possíveis conteúdos para serem ofertados durante o evento, que contou com a participação de mais de xxxx pessoas."
            />
            {/* Projeto 5 */}
            <ProjectCard
              title="Monitoria Programação"
              info="Início: Período de 01/07/2020 a 30/12/2020, totalizando 480 horas. Período de 01/03/2019 a 30/11/2019, totalizando 640 horas. Fim: 12/2019. Instituição pertencente: IFSP São Carlos. Participação: Para a monitoria, era preparado um material adaptado para as necessidades. Auxiliei as alunas em áreas de web (HTML, CSS, PHP e JavaScript), programação orientada a objetos (JAVA), base de dados (modelagem de banco de dados relacional, em MySQL) e desenvolvimento de dispositivos móveis (Android Studio e Java). Napne: Durante a participação no projeto, fiz parte do grupo NAPNE O Núcleo de Apoio às Pessoas com Necessidades Educacionais Específicas (Napne) do IFSP do Câmpus São Carlos, um núcleo propositivo e consultivo que media as ações inclusivas no câmpus, buscando o envolvimento do público-alvo da educação especial e de toda a comunidade escolar com a inclusão social e educacional de todos. Participei ativamente no grupo para entender as necessidades das alunas, e discutir com grupo docente, psicóloga e pedagogas possíveis medidas para aumentar a Acessibilidade em libras no campus."
            />
            {/* Projeto 6 */}
            <ProjectCard
              title="Diversidade Cultural"
              info="Fui responsável por divulgar a cultura Latino-Americana através de Saraus online e palestras ministradas em língua espanhola. Durante o projeto, contamos com a participação de mais de 1.000 pessoas interessadas e 10 palestrantes."
            />
            {/* Projeto 7 */}
            <ProjectCard
              title="Evento Solidário - Gincana Beneficente"
              info="link: https://portais.ifsp.edu.br/scl/index.php/noticia-em-destaque/17-ultimas-noticias/737-gincana-de-alunos-do-ifsp-beneficia-entidades-filantropicas-da-cidade-de-sao-carlos.html
                    Duração:
                    Realização:
                    Arrecadamos mais de 1 tonelada de alimentos, aproximadamente 200 livros e produtos de higiene pessoal para destinar para 6 entidades filatrópicas da cidade de São Carlos."
            />
            {/* Projeto 8 */}
            <ProjectCard
              title="Divulgação dos cursos técnicos nas escolas públicas por intermédio dos alunos do IFSP"
              info="divulgação junto às escolas da rede pública municipal e estadual da cidade"
            />
            {/* Projeto 9 */}
            <ProjectCard
              title="Comissão organizadora da II Semana da Educação do Campus São Carlos - SEDUCA"
              info="05/2019 a 10/2019
                     Fiz parte do grupo que busca atividades educativas e culturais, como palestras, minicursos, oficinas, rodas de conversa, saraus culturais, show de talentos, gincana, entre outras ações relacionadas ao tema: “Educação, Sociedade e Política”. O objetivo foi proporcionar ao público interno e externo atividades enriquecedoras que possibilitem a ampliação da formação proporcionada pela instituição em seus cursos regulares."
            />
            {/* Projeto 10 */}
            <ProjectCard
              title="O Impacto do uso de vídeos institucionais como estratégia de divulgação das ações do IFSP"
              info="Início :04/2021
                    Fim: Ainda no Projeto
                    Instituição pertencente: IFSP
                    Participação:
                    Fiz parte de um grupo de pesquisa que coletou informações sobre a divulgação de informações a partir de vídeos. Para esse projeto foi aplicado um questionário aos integrantes da instituição."
            />
            {/* Projeto 11 */}
            <ProjectCard
              title="WIT"
              info="Início :03/2021
                    Fim: 09/2022
                    Participação:
                    Fiz parte de um grupo que organizou uma palestra voltada para as alunas da USP, para promover conhecimento sobre os direitos e segurança da mulher. Realizamos encontros para incentivar a permanência das alunas nos espaços tecnológicos. Participei e organizei rodas de conversa sobre o espaço das mulheres no campus e no mercado de trabalho. Fizemos eventos para recepcionar as calouras do campus. Fiz parte da organização da semana de workshop e minicursos com temas que envolvem tecnologia, para aumentar a visibilidade de mulheres da área de exatas e tecnologia."
            />
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-12 bg-gray-600">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Entre em Contato</h2>
          <form action="#" className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-white">Nome</label>
              <input type="text" id="name" name="name" className="w-full border-gray-700 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-white">Email</label>
              <input type="email" id="email" name="email" className="w-full border-gray-700 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-white">Mensagem</label>
              <textarea id="message" name="message" rows="4" className="w-full border-gray-700 rounded-md px-4 py-2"></textarea>
            </div>
            <button type="submit" className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800">Enviar</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
