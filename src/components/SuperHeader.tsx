const SuperHeader = () => {
  return (
    <div className="fixed top-0 w-full bg-black text-sm z-50 h-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="container mx-auto px-4 lg:px-8 h-full">
        <div className="flex items-center justify-end gap-4 pr-8 h-full">
          <p className="text-gray-300">
            Una empresa de{" "}
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://moovmediagroup.com/" 
              className="text-primary hover:text-primary/80 transition-colors underline"
            >
              Moov Media Group
            </a>
          </p>
          <span className="text-gray-500">|</span>
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://moovmediagroup.com/buscamos-talento/" 
            className="text-gray-300 hover:text-primary transition-colors"
          >
            Postula
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuperHeader; 