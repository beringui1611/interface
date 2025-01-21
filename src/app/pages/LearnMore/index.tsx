import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import DISCORD_IMAGE from '@/assets/discord-community.png';
import { DevicePhoneMobileIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function LearnMore() {
  return (
    <div id='2' className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-greenPrimary">Deploy faster</p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                A Melhor Comunidade
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
              Agora é a sua chance de fazer parte da melhor comunidade WEB3 e tomar o controle da sua jornada cripto! Conecte-se, aprenda com os melhores e nunca mais perca uma oportunidade.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt=""
            src={DISCORD_IMAGE}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
              Imagine um lugar onde você aprende a dominar o mercado, conecta-se com as mentes mais brilhantes da 
                    blockchain e nunca mais deixa seus ativos escaparem por entre os dedos. Aqui, você encontra dicas exclusivas, segurança de 
                    ponta e uma rede de pessoas que estão tão comprometidas quanto você em construir um futuro melhor na Web3.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <UserGroupIcon aria-hidden="true" className="mt-1 size-5 flex-none text-greenPrimary" />
                  <span>
                    <strong className="font-semibold text-gray-900">Comunidade</strong><br/>  Membros 100% focados no mercado Web3, com a leveza de uma comunidade aberta e descentralizada!
                    
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-greenPrimary" />
                  <span>
                    <strong className="font-semibold text-gray-900">Segurança</strong> <br/>
                     Aqui, você encontra muito mais do que conexões: nós ajudamos, alertamos sobre golpes e ensinamos como evitá-los. Segurança é prioridade, e conhecimento é o nosso poder.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <DevicePhoneMobileIcon aria-hidden="true" className="mt-1 size-5 flex-none text-greenPrimary" />
                  <span>
                    <strong className="font-semibold text-gray-900">Dapp</strong> <br/> Na nossa comunidade, você pode ir além: crie seus próprios tokens, organize airdrops épicos, e aproveite o melhor de diversos agregadores e soluções DeFi. Tudo isso em um ambiente aberto, seguro e cheio de oportunidades.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Entra agora e venha se divertir, aprender e ganhar na comunidade mais inovadora do Web3! Aqui você cria, participa e transforma o mercado de blockchain com liberdade, segurança e muito estilo.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Devo me preocupar?</h2>
              <p className="mt-6">
              Somos uma comunidade aberta, onde qualquer pessoa pode compartilhar informações sobre novas criptomoedas e oportunidades no mundo Web3. E o melhor: tudo passa pela validação da comunidade antes de ser considerado.              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
