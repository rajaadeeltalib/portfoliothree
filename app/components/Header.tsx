const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white">
            Port<span className="text-accent">folio</span>
          </h1>
          <button className="btn btn-sm">Hire Me!</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
