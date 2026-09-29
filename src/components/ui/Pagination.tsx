import Link from "next/link";

interface Props {
  currentPage: number;
  totalPages: number;
  basePath: string; // ej: "/characters"
  name?: string; // para no perder la búsqueda al cambiar de página
}

// Paginación clásica: Anterior | Página X de Y | Siguiente
export default function Pagination({ currentPage, totalPages, basePath, name = "" }: Props) {
  const pageUrl = (page: number) => `${basePath}?page=${page}&name=${encodeURIComponent(name)}`;
  const buttonClass = "rounded bg-green-700 px-4 py-2 text-white";

  return (
    <div className="my-6 flex items-center justify-center gap-4">
      {currentPage > 1 ? (
        <Link href={pageUrl(currentPage - 1)} className={buttonClass}>
          Anterior
        </Link>
      ) : (
        <span className={`${buttonClass} opacity-40`}>Anterior</span>
      )}

      <span>
        Página {currentPage} de {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link href={pageUrl(currentPage + 1)} className={buttonClass}>
          Siguiente
        </Link>
      ) : (
        <span className={`${buttonClass} opacity-40`}>Siguiente</span>
      )}
    </div>
  );
}
