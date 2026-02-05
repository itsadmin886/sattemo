const Footer = () => {
  return (
    <footer className="py-8 bg-brand-blue-light border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 ყველის სახლი – სათემო. ყველა უფლება დაცულია.
          </p>
          <p className="text-sm text-muted-foreground">
            დამზადებულია სიყვარულით კახეთში 🇬🇪
            <br/>დირექტორი: ლევან წითელაური
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
