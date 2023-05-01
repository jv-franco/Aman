export default function Footer() {
  return (
    <footer className="h-28 bg-blue-950 flex flex-col text-center items-center justify-center text-white mt-10">
      <h1>
        <span className="text-slate-300"> NomeDoSite</span> © Direitos
        reservados
      </h1>
      <h1>
        Criado por
        <a
          className="text-slate-300 ml-2"
          target="_blank"
          href="https://jv-franco.github.io/portfolio/"
        >
          João Vitor
        </a>
      </h1>
    </footer>
  );
}
