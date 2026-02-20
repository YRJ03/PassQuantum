export default function Footer() {
  return (
    <footer className="absolute bottom-2  w-full">
      <div className="w-[80%] mx-auto pt-6 transition">
        
        <p className="text-center text-sm">
          © {new Date().getFullYear()} 
          <a 
            href="https://yuvitech.netlify.app/" 
            target="_blank" 
            className="mx-1 font-medium text-blue-500"
          >
            YuviTech
          </a>
          — All rights reserved.
        </p>

      </div>
    </footer>
  );
}
