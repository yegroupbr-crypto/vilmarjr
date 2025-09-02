import React from 'react';

export default function Footer() {
  const [year, setYear] = React.useState(new Date().getFullYear());

  return (
    <footer className="text-center text-slate-400 font-medium">
      <p className="text-xs">© {year} Vilmar Jr.</p>
    </footer>
  );
}
