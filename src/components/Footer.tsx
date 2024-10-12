export default function Footer() {

const year = new Date().getFullYear();

   return (
      <footer className="bg-gray-800 text-white py-4">
         <div className="container mx-auto text-center text-[10px]">
            <p>© {year} myciecisnieniem.pl All rights reserved.</p>
            <p>Projekt i realizacja: Michał Rowiński (mic.rowinski@gmail.com), Małgorzata Rowińska (m.rowinska@icloud.com)</p>
         </div>
      </footer>
   );
}