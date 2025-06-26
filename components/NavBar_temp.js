// components/NavBar.js
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const { pathname } = useRouter();

  // stile link attivo
  const linkStyle = (href) => ({
    marginRight: 18,
    textDecoration: 'none',
    fontWeight: pathname === href ? 'bold' : 'normal',
    color: '#2e8b57',
  });

  return (
    <nav
      style={{
        width: '100%',
        padding: '12px 0',
        borderBottom: '1px solid #eee',
        marginBottom: '2rem',
        position: 'sticky',
        top: 0,
        background: '#fff',
        zIndex: 1000,
      }}
    >
      <Link href="/"><a style={linkStyle('/')}>Home</a></Link>
      <Link href="/programma"><a style={linkStyle('/programma')}>Programma</a></Link>
      <Link href="/about"><a style={linkStyle('/about')}>About</a></Link>
    </nav>
  );
}
