export default function ServicesLinks() {
  const links = [
    { href: '/visa-news', label: 'VISA NEWS' },
    { href: '/visa-options', label: 'VISA OPTIONS' },
    { href: '/our-services', label: 'OUR SERVICES' },
    { href: '/contact', label: 'CONTACT US' },
  ];

  return (
    <section className="container">
      <div className="row">
        {links.map(({ href, label }) => (
          <div key={label} className="col-6 col-md-3 p-2">
            <a href={href} className="btn btn-outline-dark w-100">
              {label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
