export function Footer() {
  return (
    <footer className="border-t bg-slate-50 py-6 text-center text-sm text-slate-500">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} GYS Hazırlık Platformu. Tüm hakları saklıdır.</p>
        <p className="mt-1 text-xs">MEB GYS Sınavına hazırlık amacıyla oluşturulmuştur.</p>
      </div>
    </footer>
  );
}
