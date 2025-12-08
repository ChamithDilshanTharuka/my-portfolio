import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © <script>document.write(new Date().getFullYear())</script> Portfolio Universe.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              By Chamith Dilshan Tharuka
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer