const Footer: React.FC = () => {
  return (
    <footer className="bg-red-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold mb-3">MyWeb</h2>
          <p className="text-sm text-red-100">
            Mendorong generasi muda untuk terus belajar dan berkembang, bukan hanya tentang teknologi, tetapi juga tentang kreativitas, inovasi, dan kolaborasi untuk masa depan yang lebih baik.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Menu</h3>
          <ul className="flex flex-col gap-2 text-red-100">
            <li><a href="#">Beranda</a></li>
            <li><a href="#about">Tentang</a></li>
            <li><a href="#speakers">Narasumber</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Kontak</h3>
          <p className="text-red-100 text-sm">
            Email: thyvtyx01@gmail.com <br />
            Phone: +62 882-0060-54037
          </p>
        </div>

      </div>

      <div className="text-center text-sm text-red-200 mt-10">
        © 2026 Myproject - All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;